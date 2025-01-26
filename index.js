const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
    console.log("request is received");
});

app.get("/:username/:id", (req, res) => {
    res.send(`welcome to the page of @${username}.`);
    console.log(req.params);
});




// app.use((req, res) => {
//     console.log("request receieved");
//     res.send("This is a basic response");
// })