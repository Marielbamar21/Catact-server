import { Schema, ObjectId } from "mongoose";

export const userSaveModel = new Schema(
    {
        id_user: ObjectId,
        id_post: [{id_post:ObjectId}],
        dataCreate: { type: Date , default: Date.now},
        status: { type: Boolean , default: true}

    }, { collection: 'userSave' }
);

export const UserSave = mongoose.model('userSave', userSaveModel);