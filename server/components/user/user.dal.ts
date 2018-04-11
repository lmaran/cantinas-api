import mongoService from "../../util/mongo.service";
const collection = "users";

const userDal = {

    getAll: async () => {
        const db = await mongoService.getDb();

        return  await db.collection(collection).find().toArray();
    },

    // // ---------- CRUD ----------
    getById: async (id: any) => {
        const db = await mongoService.getDb();
        id = mongoService.normalizedId(id);
        return await db.collection(collection).findOne({ _id: id });
    },

    create: async (user: any) => {
        const db = await mongoService.getDb();
        return await db.collection(collection).insertOne(user);
    },

};

export default userDal;