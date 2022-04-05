/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
const asyncHandler = require("express-async-handler");
import { BaseAuth, Auth } from "./auth.interface";
import { generateToken } from "./generateToken";
import { UserModel } from "./auth.model";
import { TodoModel } from "./../todos/todo.model";
/**
 * Router Definition
 */
export const authRouter = express.Router();
/**
 * Controller Definitions
 */

// post /login
authRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const user: BaseAuth = req.body;
    const UserExists: Auth = await UserModel.findOne({
      email: user.email,
    });
    if (UserExists) {
      res.status(400).json({ message: "User Exists ", success: false });
    } else {
      user.password = bcrypt.hashSync(req.body.password, 8);
      const newUser = new UserModel(user);
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (e: any) {
    res.status(400).json({ message: `${e.message}`, success: false });
  }
});

// POST Register
authRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const body: BaseAuth = req.body;

    const user: Auth = await UserModel.findOne({
      email: body.email,
    });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          phone: user.phone,
          email: user.email,

          token: generateToken(user),
        });
        return;
      }
    } else {
      res.status(400).json({ message: "Invalid credentials ", success: false });
    }
  } catch (e: any) {
    console.log(e);
    res.status(500).send(e);
  }
});

authRouter.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const user = {
      email: "seed@example.com",
      name: "Seed User",
      password: "seedpassword",
      phone: 2547009990,
    };
    const todo = {
      todo: "Register a todo from a seed",
    };
    user.password = bcrypt.hashSync(user.password, 8);
    await UserModel.remove({});
    await TodoModel.remove({});
    await TodoModel.insertMany(todo);
    const createdUsers = await UserModel.insertMany(user);
    res.send({ createdUsers });
  })
);
