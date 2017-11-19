import userDal from "./user.dal";

const service = {

    // getAll: async () => {
    //     return [{ name: "aaa" }];
    // }


    getAll: async () => {
        const users = await userDal.getAll();
        return(users);
    },

    getById: async (id: any) => {
        const user = await userDal.getById(id);
        return(user);
    },

    getPromisTest: async (name: string) => {
        return delayedHello(name, 1000);
    }

};

/**
 * Some predefined delays (in milliseconds).
 */
export enum Delays {
    Short = 500,
    Medium = 2000,
    Long = 5000,
  }

/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(name: string, delay: number = Delays.Medium): Promise<string> {
    return new Promise<string>(
        (resolve: (value?: string | PromiseLike<string>) => void) => setTimeout(
        // (resolve) => setTimeout(
            () => resolve(`Hello, ${name}`),
            delay
        ));
  }

export default service;