import userDal from "./user.dal";

const userService = {

    getAll: async () => {
        const users = await userDal.getAll();
        return(users);
    },

    getById: async (id: any) => {
        const user = await userDal.getById(id);
        return(user);
    },

    create: async (user: any) => {
        await userDal.create(user);
    },

};

export default userService;