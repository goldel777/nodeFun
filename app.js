const express = require('express');
const app = express();

console.log("running");
app.get('/', (req, resp) => {
   resp.send("Welcome HOME!");
});

const port = process.env.port || 3000;
console.log("My App Running on", port);
app.listen(port, () => {
    console.log("Starting my app");
});

