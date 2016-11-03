#/bin/sh
mongo_connection=192.168.59.103:27017/local
#boot2docker up
#docker run -d -p 27017:27017 mongo
#sleep 5s #need time for mongo db start
mongo $mongo_connection --eval "db.getSiblingDB('lb-mongo')"
mongo $mongo_connection --eval "db.widget.insert({"name":"tutorials point"})"
#mongo $mongo_connection --eval "db.createUser({user: "lb-user",pwd: "lb-pass",roles: [ "readWrite", "dbAdmin" ]});"

