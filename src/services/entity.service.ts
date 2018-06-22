import { mongoHelper } from "../helpers";
import { IEntity } from "../interfaces/entity.interface";

const collection = "warehouses";

export const entityService = {
    getAll: async (entityName: string): Promise<IEntity[]> => {
        const db = await mongoHelper.getDb();
        const entities = await db
            .collection(entityName)
            .find()
            .toArray();
        return entities;
    },

    getOneById: async (id: any) => {
        const db = await mongoHelper.getDb();
        id = mongoHelper.normalizedId(id);
        const entity = await db.collection(collection).findOne({ _id: id });
        return entity;
    },

    insertOne: async entity => {
        const db = await mongoHelper.getDb();
        return await db.collection(collection).insertOne(entity);
    },

    updateOne: async (entity: any) => {
        const db = await mongoHelper.getDb();
        entity._id = mongoHelper.normalizedId(entity._id);
        return await db.collection(collection).updateOne({ _id: entity._id }, entity);
    },

    deleteOneById: async (id: any) => {
        const db = await mongoHelper.getDb();
        id = mongoHelper.normalizedId(id);
        return await db.collection(collection).deleteOne({ _id: id });
    },

    getAllEntities: async (): Promise<string[]> => {
        // todo: get them from db and then cache
        return ["dishes", "warehouses"];
    },
};
