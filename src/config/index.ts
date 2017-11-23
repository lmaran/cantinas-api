// process.env.NODE_ENV = process.env.NODE_ENV || "development";

import * as _ from "lodash";
import * as path from "path";

import developmentConfig from "./development";
import stagingConfig from "./staging";
import productionConfig from "./production";
import testConfig from "./testing";

interface IBlobSecrets {
    account: string;
    key: string;
}

interface IMongoSecrets {
    uri?: string;
    options?: object;
}

const enum EnvironmentType {
    DEVELOPMENT = "development",
    STAGING = "staging",
    PRODUCTION = "production",
    TEST = "testing"
}

interface IConfig {
    env?: string;
    root?: string;
    port?: string | number;
    userRoles?: string[];
    mongo?: IMongoSecrets;
    rollbarToken?: string;
    // externalUrl?: string;
    azureBlobStorage?: IBlobSecrets;
    azureBlobStorageCool?: IBlobSecrets;
}

interface IEnvConfig {
    [key: string]: IConfig;
    // development: IConfig;
    // test: IConfig;
}

const envConfig: IEnvConfig = {
    development: developmentConfig,
    staging: stagingConfig,
    production: productionConfig,
    test: testConfig

};

// All configurations will extend these options
// ============================================

const common: IConfig = {
    env: process.env.NODE_ENV || "development",
    mongo: {
        options: {
            // db: {
            //     // safe: true // in Mongo 2.0 this option is "true" by default and is equals to {w:1}
            //     // details: http://stackoverflow.com/a/14801527
            // }
        }
    },
    port: process.env.PORT || 1410,
    rollbarToken: "c40dd41c292340419923230eed1d0d61",
    root: path.normalize(__dirname + "/../../..") // 3 folders back from the current folder
};

const config = _.merge(
    common,
    envConfig[common.env]);

export { IConfig, EnvironmentType };
export default config;