var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("tests");
  var myobj = { name: "Jose Ecos", company: "Jalasoft" };
  var myobj2 = { name: "Martin", company: "Jalasoft" };

  dbo.createCollection("test1", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });

  dbo.collection("test1").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

  dbo.collection("test1").insertOne(myobj2, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});