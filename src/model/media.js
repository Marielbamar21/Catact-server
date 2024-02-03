import { Schema, ObjectId, mongoose } from "mongoose";

const mediaSchema = new Schema({
    profile: ObjectId,
    media: String,
    id_user: ObjectId,
    category: String,
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    status : { type: Boolean , default: true}
}, { collection: 'media' });

export const Media = mongoose.model('media', mediaSchema);