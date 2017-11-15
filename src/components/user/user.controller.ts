import { Request, Response } from "express";
import userService from "./user.service";

const controller = {

    getAll: async (req: Request, res: Response) => {

        // userService.getAll(function(users: any){
        //      res.json([{name: "aaa"}]);
        // })

        const users = await userService.getAll();
        res.json(users);

        // res.json([{name: "aaa1234567"}]);
    }

};

export default controller;