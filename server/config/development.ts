import { IEnvConfig } from "../interfaces";
import { LogDetail, LogLevel } from "../constants";

const config: IEnvConfig = {
    mongo: {
        uri: "mongodb://localhost",
        dbName: "cantinas-dev",
    },
    rollbarToken: "b5918a382acd4047817c18d4d3b42d49",
    logglyToken: "ffa32efd-fe1b-4de4-99c2-9c0d6b1f07bc",
    logglySubdomain: "lmaran",
    logLevel: LogLevel.DEBUG,
    httpLogDetails: {
        request: {
            general: LogDetail.PARTIAL,
            headers: LogDetail.NONE,
            body: false,
        },
        response: {
            general: false,
            headers: false,
            body: false,
        },
    },
};

export default config;
