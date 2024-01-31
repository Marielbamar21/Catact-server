import { Schema, ObjectId } from "mongoose";

export const mediaModel = new Schema({
    media: String,
    id_user: ObjectId,
    category: String,
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    status : { type: Boolean , default: true}
}, { collection: 'media' });

export const Media = mongoose.model('media', mediaModel);