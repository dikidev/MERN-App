const express = require("express");

const app = express();

const port = 6969;

app.get("/", (req, res) => {
    return res.send("hello world!");
});

app.listen(port, () => {
    console.log("Server is ALL G - up and running");
});