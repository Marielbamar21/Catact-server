import { Schema, ObjectId ,mongoose} from "mongoose";

const notificationSchema = new Schema ({
    profile: [{id_profile:{type: ObjectId, ref: 'profile'}}],
    id_action: ObjectId,
    typeAction: String,
    heather: String,
    content: String,
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    isRead: { type: Boolean , default: false},
    sstatus: { type: Boolean , default: true}
}, { collection: 'notification' });

export const notification = mongoose.model('notification', notificationSchema);
