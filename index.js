const express = require('express');
const app = express();
const port = 8080;

const healthStatus = {ping: {healthy: true}, service1: {healthy: true, ms: 321.22}, service2: {healthy: true, ms: 459.99}};
app.get('/api/v1/healthcheck', (req, res) => res.send(healthStatus));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));