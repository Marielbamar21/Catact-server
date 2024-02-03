import { Schema, ObjectId , mongoose} from "mongoose";

const messageSchema = new Schema({id_profile: {type:ObjectId, ref: 'profile'}, content: String, date: {type:Date, default : Date.now}})

const chatSchema = new Schema ({
   profile: [{id_profile: {type:ObjectId, ref: 'profile'}}],
   message :[messageSchema],
   dataCreate: { type: Date , default: Date.now},
   dateUpdate: { type: Date , default: Date.now},
   status: { type: Boolean , default: true}
}, { collection: 'chat' });

export const chat = mongoose.model('chat', chatSchema);
