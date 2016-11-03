/**
 * Created by bob on 16/11/2.
 */
console.log("start init mongo db");
var databaseUrl = "192.168.59.103:27017/lb-mongo";
var collections = ["widget", "reports"]
var mongojs = require("../../Jellyfish/node_modules/mongojs/index")
var db = mongojs(databaseUrl,collections);
console.log(db);
var widget = db.collection('widget')
widget.insert({ email: "me@me.com", pasword: "password" },function (err,saved) {
      if(err||!saved) console.log("save failed");
      else console.log("save successful");
});
db.widget.runCommand({ping:1});
db.close()
console.log(widget);

