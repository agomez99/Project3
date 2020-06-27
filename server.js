const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

//express
const app = express();
app.use(express.json());
app.use(cors());

<<<<<<< HEAD
const PORT = process.env.PORT||5001;
//---------------------------------------------------------------------------------
require('dotenv').config({ path: '.env' });
=======
const PORT = process.env.PORT||3001;
>>>>>>> b348a2c270b4aa72206a3fff7922c0807c0b5915


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎==> API Server now listening on PORT ${PORT}  `);
});



//mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING || MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true,useCreateIndex: true},
  (err)=> {
    if(err) throw err;
    console.log("Mongoose connection established")
  });

  //routes
  app.use("/users", require("./routes/userRouter"));