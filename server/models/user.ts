import { defineMongooseModel } from '#nuxt/mongoose';

export const User = defineMongooseModel('Users', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    }
});