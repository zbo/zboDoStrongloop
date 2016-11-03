/**
 * Created by bob on 16/11/3.
 */
console.log("start init mongo db");
var databaseUrl = "mongodb://192.168.59.103:27017/lb-mongo";
var collections = ["widget", "reports"]

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

MongoClient.connect(databaseUrl, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    var collection = db.collection('Record');
    collection.insertMany([
        {
            "sequence": 0,
            "value": 1,
            "id": "1"
        },
        {
            "sequence": 1,
            "value": 2,
            "id": "2"
        }]);
    db.close();
});