import mongoService from "../../util/mongo.service";
// let i = 0;
const collection = "users";

const service = {

    getAll: async () => {
        // console.log(i + ": getAll start...");
        const db = await mongoService.getDb();

        // console.log("getAll have a db...");
        const data =  await db.collection(collection).find().toArray();
        // console.log("getAll have data...");
        // console.log("");
        // i++;
        return data;
    },

    // // ---------- CRUD ----------
    getById: async (id: any) => {
        const db = await mongoService.getDb();
        id = mongoService.normalizedId(id);
        const data =  await db.collection(collection).findOne({ _id: id });
        return data;
    }

};

export default service;