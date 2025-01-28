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

app.get("/:username", (req,res) =>{
    console.log(req.params);
    const {username} = req.params;
    res.send(`Hello, ${username}`);
   
});
app.get("/:username/:id",(req,res) =>{
    console.log(req.params);
    const { username, id} = req.params;
    res.send(`hello, ${username}, your ID is ${id}`);
});




// app.use((req, res) => {
//     console.log("request receieved");
//     res.send("This is a basic response");
// })