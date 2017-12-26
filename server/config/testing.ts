import { IConfig } from "./";

const config: IConfig = {
    port: process.env.PORT || 1416,
    mongo: {
        uri: "mongodb://localhost/cantinas-test"
    },
    authRootUrl: process.env.AUTH_ROOT_URL || "http://cantinas.ro"
};

export default config;