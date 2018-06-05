import * as Ajv from "ajv";
import { Request, Response } from "express";
import { IUser, userSchema } from "../interfaces";
import { userService } from "../services";

export const userController = {
    getAll: async (req: Request, res: Response) => {
        const users = await userService.getAll();
        res.json(users);
    },

    getOneById: async (req: Request, res: Response) => {
        const userId = req.params.id;

        const user = await userService.getOneById(userId);
        res.json(user);
    },

    insertOne: async (req: Request, res: Response) => {
        // console.log("aaa");
        // Validate request
        // if (!req.body) {
        //     return res.status(400).send({
        //         message: "User content can not be empty",
        //     });
        // }

        const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
        const isValidUser = ajv.validate(userSchema, req.body);

        if (isValidUser) {
            const user: IUser = req.body;
            await userService.insertOne(user);
            res.json(user);
        } else {
            console.log(ajv.errors);
            res.status(400).json(ajv.errors);
        }
    },

    updateOne: async (req: Request, res: Response) => {
        // console.log("aaa");
        // Validate request
        if (!req.body) {
            return res.status(400).send({
                message: "User content can not be empty",
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
    },
};
