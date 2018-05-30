export interface IUser {
    // sub: string;
    // preferred_username: string;
    // name: string;
    // email: string;
    // email_verified: boolean;
    // username: string;
    // hashedPassword: string;
    // salt: string;
    _id: string;
    firstName: string;
    lastName: string;
    age?: number;
}

export const userSchema = {
    title: "User",
    type: "object",
    properties: {
        firstName: {
            type: "string",
        },
        lastName: {
            type: "string",
        },
        age: {
            description: "Age in years",
            type: "integer",
            minimum: 10,
        },
    },
    required: ["firstName", "lastName"],
};
