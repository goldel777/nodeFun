const express = require('express');
const app = express();

console.log("running");
app.get('/', (req, resp) => {
   resp.send("Welcome HOME!");
});


console.log("running2xx");
app.listen(3000, () => {
    console.log("Starting my app");
});

