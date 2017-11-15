import userDal from "./user.dal";

const service = {

    // getAll: async () => {
    //     return [{ name: "aaa" }];
    // }


    getAll: async () => {
        const users = await userDal.getAll();
        return(users);
    }


};

export default service;