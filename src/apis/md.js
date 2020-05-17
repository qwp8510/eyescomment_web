const mongoose = require('mongoose');
const express = require('express');
const API_PORT = 3001;
const router = express.Router();  
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./backend/data');
const app = express();
app.use(cors());

const uri = "mongodb+srv://weichen:defaultisnotroot@raw-comment-chinese-erjue.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {dbName: 'comment-chinese'}, {collectionName: 'raw-comment'}, { useNewUrlParser: true });
let db = mongoose.connection
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data});
  });
});
router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.message = message;
  data.id = id;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use('/api', router);
//send to backend port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
