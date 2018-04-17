import mongoService from "../../util/mongo.service";
const collection = "users";

const userDal = {
  getAll: async () => {
    const db = await mongoService.getDb();

    return await db
      .collection(collection)
      .find()
      .toArray();
  },

  // // ---------- CRUD ----------
  findOneById: async (id: any) => {
    const db = await mongoService.getDb();
    id = mongoService.normalizedId(id);
    return await db.collection(collection).findOne({ _id: id });
  },

  insertOne: async (user: any) => {
    const db = await mongoService.getDb();
    return await db.collection(collection).insertOne(user);
  },

  updateOne: async (user: any) => {
    const db = await mongoService.getDb();
    user._id = mongoService.normalizedId(user._id);
    return await db.collection(collection).findOneAndUpdate({ _id: user._id }, user);
  },

  deleteOneById: async (id: any) => {
    const db = await mongoService.getDb();
    id = mongoService.normalizedId(id);
    return await db.collection(collection).deleteOne({ _id: id });
  }
};

export default userDal;
