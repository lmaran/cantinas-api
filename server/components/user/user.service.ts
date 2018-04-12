import userDal from "./user.dal";

const userService = {
  getAll: async () => {
    const users = await userDal.getAll();
    return users;
  },

  getOneById: async (id: any) => {
    const user = await userDal.findOneById(id);
    return user;
  },

  insertOne: async (user: any) => {
    await userDal.insertOne(user);
  },

  deleteOneById: async (id: any) => {
    await userDal.deleteOneById(id);
  }
};

export default userService;
