import { Schema, ObjectId } from "mongoose";

export const commentModel = new Schema ({
   id_user: ObjectId,
   id_userLike: [{id_user: ObjectId}],
   content : String,
   CommentReview: [{id_commentReview: ObjectId}],
   dataCreate: { type: Date , default: Date.now},
   dateUpdate: { type: Date , default: Date.now},
   status: { type: Boolean , default: true}
},{ collection: 'comment' });

export const Comment = mongoose.model('comment', commentModel);
