const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
    
app.get("/", (req, res) => {
    //process.exit(0)
    client.get("visits", (err, visits) => {
        res.send("Number of visits 1" + visits);
        client.set("visits", parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening to port 8081');
});