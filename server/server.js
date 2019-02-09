const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require('cors');
const db = require('../database/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

// GET requests
app.get('/recent-broadcasts', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    db.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    })
      .limit(100)
      .sort({ _id: -1 })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.get('/recent-highlights', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    db.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    })
      .limit(100)
      .sort({ _id: -1 })
      .catch((err) =>  {
        console.log(err);
      });
  }
});

app.get('/find-video', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const id = req.body._id;
    db.findById(id, (err, video) => {
      if (err) {
        console.log(err);
      } else {
        res.send(video);
      }
    });
  }
});

// POST request
app.post('/add-video', (req,res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const newVideo = new db(req.body);
    newVideo.save(err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(newVideo);
      }
    });
  }
});

// UPDATE request
app.put('/update-video', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const id = req.body._id;
    db.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send(data);
      }
    });
  }
});

// DELETE request
app.delete('/delete-video', (req,res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const id = req.body._id;
    db.findByIdAndDelete(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(`${data._id} has been deleted!`);
      }
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});