import { Request, Response } from "express";
import userService from "./user.service";

const userController = {
  getAll: async (req: Request, res: Response) => {
    // userService.getAll(function(users: any){
    //      res.json([{name: "aaa"}]);
    // })

    const users = await userService.getAll();
    // res.status(200);
    res.json(users);

    // res.json([{name: "aaa1234567"}]);
  },

  getOneById: async (req: Request, res: Response) => {
    const userId = req.params.id;

    const user = await userService.getOneById(userId);
    res.json(user);

    // res.json({name: "aaa"});
  },

  insertOne: async (req: Request, res: Response) => {
    // console.log("aaa");
    // Validate request
    if (!req.body) {
      return res.status(400).send({
        message: "User content can not be empty"
      });
    }

    const user = req.body;

    await userService.insertOne(user);
    res.json(user);

    // res.json({name: "aaa"});
  },

  updateOne: async (req: Request, res: Response) => {
    // console.log("aaa");
    // Validate request
    if (!req.body) {
      return res.status(400).send({
        message: "User content can not be empty"
      });
    }

    const user = req.body;

    await userService.updateOne(user);
    res.json(user);

    // res.json({name: "aaa"});
  },


  deleteOneById: async (req: Request, res: Response) => {
    const userId = req.params.id;

    await userService.deleteOneById(userId);
    // res.status(204).send();
    res.sendStatus(204);
  }
};

export default userController;
