/**
 * Created by bob on 16/11/2.
 */
console.log("start init mongo db");
var databaseUrl = "mongodb://192.168.59.103:27017/lb-mongo";
var collections = ["widget", "reports"]

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

MongoClient.connect(databaseUrl, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});
