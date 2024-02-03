import { Schema, ObjectId , mongoose} from "mongoose";

const hashtagSchema = new Schema ({
   name: string,
   dataCreate: { type: Date , default: Date.now},
   status: { type: Boolean , default: true}
}, { collection: 'hashtag' });

export const Hashtag = mongoose.model('hashtag', hashtagSchema);