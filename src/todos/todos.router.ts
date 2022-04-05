/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as TodosService from "./todos.service";
import { BaseTodo, Todo } from "./todo.interface";
import { Todos } from "./todos.interface";
import {TodoModel} from './todo.model'



/**
 * Router Definition
 */
export const todosRouter = express.Router();
/**
 * Controller Definitions
 */

// GET todos
todosRouter.get("/", async (req: Request, res: Response) => {
  try {
    const todos: Todo[] = await TodoModel.find({ deletedAt: null });
    res.status(200).send(todos);
  } catch (e:any) {
    res.status(500).send(e.message);
  }
});

// GET todos/:id

todosRouter.get("/:id", async (req: Request, res: Response) => {
  

  try {
    const item: Todo|null = await TodoModel.findOne({ _id: req.params.id });

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e:any) {
    res.status(500).send(e.message);
  }
});

// POST todos

todosRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseTodo = req.body;
    const newitem = new TodoModel(item);
  await newitem.save()
    res.status(201).json(newitem);
  } catch (e:any) {
    res.status(500).send(e.message);
  }
});

// PUT todos/:id

todosRouter.put("/:id", async (req: Request, res: Response) => {

 

  try {
    const todoUpdate: Todo = req.body;
  
    const result = await TodoModel.updateOne({ _id: req.params.id }, todoUpdate)
  
      res.status(201).json(todoUpdate )
    
  } catch (e:any) {
    res.status(500).send(e.message);
  }
});

// DELETE todos/:id

todosRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
   
     const result = await TodoModel.updateOne({ _id: req.params.id }, {deletedAt:Date()})

      res.status(201).json("deleted" )
  } catch (e:any) {
    res.status(500).send(e.message);
  }
});

