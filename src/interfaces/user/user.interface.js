"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = {
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
