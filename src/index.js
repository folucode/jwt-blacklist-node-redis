const express = require('express');
const redis = require('redis');
const app = express();
const port = 3000;
const redisPort = process.env.PORT || 6379;

const redisClient = redis.createClient(redisPort);

redisClient.on('connect', function () {
  console.log(`Redis Client running`);
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
