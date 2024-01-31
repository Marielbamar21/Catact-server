import { Schema, ObjectId } from "mongoose";

export const notificationModel = new Schema ({
    id_user: ObjectId,
    id_action: ObjectId,
    type: String,
    heather: String,
    content: String,
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    isRead: { type: Boolean , default: false},
    sstatus: { type: Boolean , default: true}
}, { collection: 'notification' });

export const notification = mongoose.model('notification', notificationModel);
