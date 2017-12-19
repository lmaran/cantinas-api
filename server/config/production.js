"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT,
    mongo: {
        uri: process.env.MONGO_URI
    },
    // externalUrl: 'https://cantinas-api.ro',
    azureBlobStorage: {
        account: process.env.AZURE_BLOB_STORAGE_ACCOUNT,
        key: process.env.AZURE_BLOB_STORAGE_ACCESS_KEY
    },
    azureBlobStorageCool: {
        account: process.env.AZURE_BLOB_STORAGE_COOL_ACCOUNT,
        key: process.env.AZURE_BLOB_STORAGE_COOL_ACCESS_KEY
    }
};
exports.default = config;