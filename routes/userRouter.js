const router =require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const auth = require('../middleware/auth')
router.post("/register", async (req, res) => {
  try {
    const { email, password, passwordCheck, displayName } = req.body;

    //validation
    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: "Not all fields have been entered" });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password need to be at least 5 characters" });
    if (password !== passwordCheck)
      return res.status(400).json({ msg: "Entered the same password twice" });

    //find unique email not used already
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "Account with this email already exist" });

    if(!displayName) displayName = email;

    //hashing password
    const salt = await bcrypt.genSalt();
    const passwordHash  = await bcrypt.hash(password, salt);

    //new user with hash password
    const newUser = new User({
        email,
        password: passwordHash,
        displayName,
    })

    //save user
    const savedUser = await newUser.save();
    res.json(savedUser);

  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate login
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered" });

      const user = await User.findOne({email: email});
      if(!user)
      return res.status(400).json({ msg: "No account with this email has been registered" });

      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch)
      return res.status(400).json({ msg: "Invalid credentials" });

      //webtoken
    const token = jwt.sign({id:user._id},"F;95aJ[rCrq7Hq4}CHC/<4\w[Xq6HSRFVys>)SaPqW:KSN;f#4");
    res.json({
        token,
        user:{
            id: user._id,
            displayName: user.displayName,
            email: user.email,
        }
    })
    //console.log(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//allow user to delete account
router.delete("/delete",auth, async(req, res) =>{
  try{
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  }catch (err) {
    res.status(500).json({ error: err.message });
  }


});

//user valid check
router.post("/tokenisValid", async (req,res) =>{
  try{
  const token = req.header("x-auth-token");
  if(!token) return res.json(false);

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if(!verified) return res.json(false);

  const user = await User.findById(verified.id)
  if(!user) return res.json(false);
  return res.json(true)

  }catch (err) {
    res.status(500).json({ error: err.message });
  }
})

//currently logged user name and id
router.get("/",auth, async(req,res)=>{
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id:user._id,
  });

})
module.exports = router;