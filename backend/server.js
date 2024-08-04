// const express = require("express");
// const todoRoutes=require("./todoRoutes");
import express from "express";
import {router } from "./todoRoutes.js";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api/todos", router);

server.get("/", (req, res)=>{
    res.send("Welcome to Utility api");
});

server.listen(4100);
console.log("Server is listening at 4100");