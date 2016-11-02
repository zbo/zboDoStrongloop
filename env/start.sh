#/bin/sh
boot2docker up
docker run -p 27017:27017 mongo
mongo 192.168.59.103:27017/local --eval "printjson(db.serverStatus())"