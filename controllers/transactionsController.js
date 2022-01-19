const express = require("express");
const transactionRoutes = express.Router();
const transactionsArr = require("../models/data.js");

const {index} = req.params;

transactionRoutes.get("/", (req, res) => {
    res.json(transactionsArr);
});

transactionRoutes.get("/:index", (req, res) => {
    if(transactionsArr[index]) res.json(transactionsArr[index]);
    else res.status(404).json({error: "Not Found"});
});

transactionRoutes.post("/", (req, res) => {
    transactionsArr.push(req.body);
    res.json(transactionsArr[transactionsArr.length - 1]);
});

transactionRoutes.delete("/:index", (req, res) => {
    if(transactionsArr[index]) {
        let remove = transactionsArr.splice(index, 1);
        res.json(remove[0]);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});

transactionsArr.put("/:index", (req, res) => {
    if(!transactionsArr[index]) {
        res.stat(404).json({error: "Not Found"});
        return;
    }

    let {date, name, amount, from} = req.body;
    if(date && name && amount && from) {
        transactionsArr[index] = {date, name, amount, from};
        res.json(transactionsArr[index]);
    } else {
        res.status(422).json({error: "Please Provide All Fields"});
    }
});

module.exports = transactionRoutes;