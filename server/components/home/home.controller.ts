import { Request, Response } from "express";

const homeController = {

    getHomePage: async (req: Request, res: Response) => {
        res.send("Hello Cantinas API");
    },

};

export default homeController;