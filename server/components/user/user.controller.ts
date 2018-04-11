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

    getById: async (req: Request, res: Response) => {
        const userId = req.params.id;

        const user = await userService.getById(userId);
        res.json(user);

        // res.json({name: "aaa"});
    },

    create: async (req: Request, res: Response) => {
        // console.log("aaa");
        // Validate request
        if ( !req.body) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        const user = req.body;

        await userService.create(user);
        res.json(user);

        // res.json({name: "aaa"});
    }

};

export default userController;