import express from "express";
import { getTodos, addTodos } from "./todoController.js";

const router = express.Router();

router.get("/", getTodos);

router.post("/", addTodos);

export {router};