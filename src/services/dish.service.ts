import { mongoHelper } from "../helpers";
import { IDish } from "../interfaces";

const collection = "dishes";

export const dishService = {
    getAll: async (): Promise<IDish[]> => {
        const db = await mongoHelper.getDb();
        const dishes = await db
            .collection(collection)
            .find()
            .toArray();
        return dishes;
    },

    getOneById: async (id: any) => {
        const db = await mongoHelper.getDb();
        id = mongoHelper.normalizedId(id);
        const dish = await db.collection(collection).findOne({ _id: id });
        return dish;
    },

    insertOne: async dish => {
        const db = await mongoHelper.getDb();
        return await db.collection(collection).insertOne(dish);
    },

    updateOne: async (dish: any) => {
        const db = await mongoHelper.getDb();
        dish._id = mongoHelper.normalizedId(dish._id);
        return await db.collection(collection).updateOne({ _id: dish._id }, dish);
    },

    deleteOneById: async (id: any) => {
        const db = await mongoHelper.getDb();
        id = mongoHelper.normalizedId(id);
        return await db.collection(collection).deleteOne({ _id: id });
    },
};
