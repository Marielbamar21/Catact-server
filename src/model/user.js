import { Schema, mongoose} from "mongoose";

const userModel = new Schema(
    {
        name: String,
        lastname: String,
        birthDate: Date,
        email: String,
        password: String,
        dataCreate: { type: Date , default: Date.now},
        dateUpdate: { type: Date , default: Date.now},
        status: { type: Boolean , default: true}

    }, { collection: 'user' }
);

export const User = mongoose.model('user', userModel);