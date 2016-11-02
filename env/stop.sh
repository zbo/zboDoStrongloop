docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
#boot2docker stop