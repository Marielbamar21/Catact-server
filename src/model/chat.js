import { Schema, ObjectId } from "mongoose";

export const chatModel = new Schema ({
   id_user: [{id_user: ObjectId}],
   message :[{id_user: ObjectId, content: String, date: new Date}],
   dataCreate: { type: Date , default: Date.now},
   dateUpdate: { type: Date , default: Date.now},
   status: { type: Boolean , default: true}
}, { collection: 'chat' });

export const chat = mongoose.model('chat', chatModel);
