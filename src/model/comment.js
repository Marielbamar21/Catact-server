import { Schema, ObjectId , mongoose} from "mongoose";

const commentSchema = new Schema ({
   id_profile_autor: ObjectId,
   userLike: [{id_profile: {type: ObjectId, ref: 'profile'}}],
   content : String,
   CommentReview: [{id_commentReview: {type: ObjectId , ref: 'commentReview'}}],
   dataCreate: { type: Date , default: Date.now},
   dateUpdate: { type: Date , default: Date.now},
   status: { type: Boolean , default: true}
},{ collection: 'comment' });

export const Comment = mongoose.model('comment', commentSchema);
