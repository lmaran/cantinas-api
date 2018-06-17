import * as Ajv from "ajv";
import { Request, Response } from "express";
import { dishService } from "../services";
const dishSchema = require("../interfaces/dish/dish.schema");

export const dishController = {
    getAll: async (req: Request, res: Response) => {
        const dishes = await dishService.getAll();
        res.json(dishes);
    },

    getOneById: async (req: Request, res: Response) => {
        const dishId = req.params.id;

        const dish = await dishService.getOneById(dishId);
        res.json(dish);
    },

    insertOne: async (req: Request, res: Response) => {
        // console.log("aaa");
        // Validate request
        // if (!req.body) {
        //     return res.status(400).send({
        //         message: "dish content can not be empty",
        //     });
        // }

        const ajv = new Ajv({
            allErrors: true, // Default is to return after the first error.
            removeAdditional: true, // This option modifies original data (remove undefined properties)
        });
        const validate = ajv.compile(dishSchema);
        const dish = req.body;
        const isValidDish = validate(dish);

        if (isValidDish) {
            await dishService.insertOne(dish);
            res.json(dish);
        } else {
            console.log(validate.errors);
            res.status(400).json(validate.errors);
        }
    },

    updateOne: async (req: Request, res: Response) => {
        // console.log("aaa");
        // Validate request
        if (!req.body) {
            return res.status(400).send({
                message: "dish content can not be empty",
            });
        }

        const dish = req.body;

        await dishService.updateOne(dish);
        res.json(dish);

        // res.json({name: "aaa"});
    },

    deleteOneById: async (req: Request, res: Response) => {
        const dishId = req.params.id;

        await dishService.deleteOneById(dishId);
        // res.status(204).send();
        res.sendStatus(204);
    },
};
