const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');




/*

db.collection('Todos').insert({
  title: "New document",
  body: "It's new document in the database",
  creationDate: new ObjectID().getTimestamp()
}, (err, res) => {
  if (err) {
    console.log(err);
  }

  console.log(JSON.stringify(res.ops, undefined, 2));

});




db.collection('Todos').deleteMany({
  text: 'Something to do'
}).then((err, res) => {
  if (err) {
    //console.log(err);
  }
  console.log('Document' + text + 'was deleted');

})


*/

  db.close();

});



















/*db.collection('Todos').insertOne({
  text: 'Something to do',
  completed: false
}, (err, result) => {
  if (err) {
    return console.log('Unable to insert todo', err);;
  }

  console.log(JSON.stringify(result.ops, undefined, 2));

});

db.collection('Users').insertOne({
  name : 'Pavel',
  age: 20,
  location: 'Moscow'}, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
});
*/
