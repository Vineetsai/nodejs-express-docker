### Build
```$xslt
docker build -t vineet/node-docker-demo
```

### Valdiate
```$xslt
docker images
```

### Instantiate/Deploy
```
docker run --name demo-node-app -p 8080:8080 -d vineet/node-docker-demo
```

### Test
Open browser and goto "localhost:8080/api/v1/healthcheck"
should see response similar to
```
{ping: {healthy: true}, service1: {healthy: true, ms: 321.22}, service2: {healthy: true, ms: 459.99}}```