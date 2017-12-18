import { Request, Response } from "express";

const checkController = {

    getCheckPage: async (req: Request, res: Response) => {
        // set DEPLOYMET_SLOT as env variable on remote server
        // e.g. "celebrate-taste-blue-staging"
        res.send("cantinas-api-" + (process.env.DEPLOYMENT_SLOT || "noslot") + "-" + process.env.NODE_ENV);
    },

};

export default checkController;