### Build
Build docker image for our nodejs app. Configuration for it included in Dockerfile. This may take few minutes to download based image.
```$xslt
docker build -t vineet/node-docker-demo
```

### Validate new image
Verify new image is built successfully, listing should include image matching name provided build command.
```$xslt
docker images
```

### Instantiate/Deploy
Deploy docker image to validate it built correctly. With -p 8080:8080 binding host node port 8080 (this can be any port) with docker instance port 8080 (this need to match EXPOSE port in Dockerfile).
```
docker run --name demo-node-app -p 8080:8080 -d vineet/node-docker-demo
```

### Test
Open browser and goto "localhost:8080/api/v1/healthcheck"
should see response similar to
```
{ping: {healthy: true}, service1: {healthy: true, ms: 321.22}, service2: {healthy: true, ms: 459.99}}
```