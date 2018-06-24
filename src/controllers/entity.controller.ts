import * as Ajv from "ajv";
import { NextFunction, Request, Response } from "express";
import { entityService } from "../services/entity.service";
const entitySchema = require("../interfaces/warehouse/warehouse.schema");

export const entityController = {
    getAll: async (req: Request, res: Response) => {
        const entities = await entityService.getAll();
        res.json(entities);
    },

    getAllItems: async (req: Request, res: Response, next: NextFunction) => {
        const entityName = req.params.entity;
        await validateEntityName(entityName, next);

        const entityItems = await entityService.getAllItems(entityName);
        res.json(entityItems);
    },

    getOneById: async (req: Request, res: Response) => {
        const entityId = req.params.id;

        const entity = await entityService.getOneById(entityId);
        res.json(entity);
    },

    insertOne: async (req: Request, res: Response) => {
        // console.log("aaa");
        // Validate request
        // if (!req.body) {
        //     return res.status(400).send({
        //         message: "entity content can not be empty",
        //     });
        // }

        const ajv = new Ajv({
            allErrors: true, // Default is to return after the first error.
            removeAdditional: true, // This option modifies original data (remove undefined properties)
        });
        const validate = ajv.compile(entitySchema);
        const entity = req.body;
        const isValidEntity = validate(entity);

        if (isValidEntity) {
            await entityService.insertOne(entity);
            res.json(entity);
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
                message: "entity content can not be empty",
            });
        }

        const entity = req.body;

        await entityService.updateOne(entity);
        res.json(entity);

        // res.json({name: "aaa"});
    },

    deleteOneById: async (req: Request, res: Response) => {
        const entityId = req.params.id;

        await entityService.deleteOneById(entityId);
        // res.status(204).send();
        res.sendStatus(204);
    },
};

async function validateEntityName(entityName: string, next: NextFunction) {
    const allEntities = await entityService.getAllEntities();
    if (!allEntities.includes(entityName)) {
        return next("route");
    }
}
