const express = require("express");
const cors = require("cors");
const app = express();
const transactionsController = require("./controllers/transactionsController.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Transactions App");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
    res.status(404).json({error: "Not Found"});
});

module.exports = app;