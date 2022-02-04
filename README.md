### 도커 네트워크 생성  
```
docker network list
docker network create referring-net
```

### 컨테이너 실행  
```
docker run -d -it -v /Users/juliana/Development/docker_project/node-app:/app --network referring-net --name node_app node:latest
```

### 컨테이너 쉘 접속  
```
docker exec -it node_app /bin/bash
```