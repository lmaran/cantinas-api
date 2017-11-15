import { mongoService } from "../../util/mongo.service";

const collection = "users";

const service = {

    getAll: async () => {
        const db = await mongoService.getDb();
        return await db.collection(collection).find().toArray();
    }



    // // ---------- CRUD ----------
    // getById: function (id, next) {
    //     // console.log(555);
    //     mongoService.getById(collection, id, next);
    // },
};

export default service;