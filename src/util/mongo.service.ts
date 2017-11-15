import config from "../config";
import { MongoClient, ObjectID } from "mongodb";

let theDb: any = undefined; // this will be re-used so the db is only created once (on first request).
const service  = {

    getDb: async () => {
        if (!theDb) {
            if (!config.mongo.uri) {
                throw new Error("Nu este definit un connection string pentru Mongo.");
            }
            const db = await MongoClient.connect(config.mongo.uri, config.mongo.options);
            theDb = db;
            return db;
        } else { // db already exists...
            return theDb;
        }
    },

    normalizedId: (id: any) => {
        if (ObjectID.isValid(id)) {
            return new ObjectID(id);
        }
        else { return id; }
    },

    // // read
    // getById: function (collection, id, next) {
    //     this.getDb(function (err, db) {
    //         if (err) { return next(err, null); }
    //         id = service.normalizedId(id);
    //         db.collection(collection).findOne({ _id: id }, next);
    //     });
    // }

    // config: config

};

export { service as mongoService };