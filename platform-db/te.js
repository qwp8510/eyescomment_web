const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://weichen:defaultisnotroot@raw-comment-chinese-erjue.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("comment-chinese").collection("raw-comment");
  // perform actions on the collection object
  const data = collection.find({}).toArray().then(items => {
      console.log(items);
  }).catch(
      console.log(err)
  )
});