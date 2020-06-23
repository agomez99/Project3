const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

//express
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT||5001;
//---------------------------------------------------------------------------------
require('dotenv').config({ path: '.env' });

const bodyParser = require('body-parser');
const Pusher = require('pusher');
const Datastore = require('nedb');


const db = new Datastore();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.find({}, (err, data) => {
    if (err) return res.status(500).send(err);

    res.json(data);
  });
});

app.post('/comment', (req, res) => {
  db.insert(Object.assign({}, req.body), (err, newComment) => {
    if (err) {
      return res.status(500).send(err);
    }

    pusher.trigger('comments', 'new-comment', {
      comment: newComment,
    });

    res.status(200).send('OK');
  });
});

app.post('/vote', (req, res) => {
  const { id, vote } = req.body;
  db.findOne({ _id: id }, function (err, doc) {
    if (err) {
      return res.status(500).send(err);
    }

    db.update({ _id: id }, { $set: { votes: doc.votes + vote } }, { returnUpdatedDocs: true }, (err, num, updatedDoc) => {
      if (err) return res.status(500).send(err);

      pusher.trigger('comments', 'new-vote', {
        doc: updatedDoc,
      });
    });
  });
});

//------------------------------------------------------------------------

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