import { Schema, ObjectId } from "mongoose";

export const commentReviewModel = new Schema ({
   id_user: ObjectId,
   id_userLike: [{id_user: ObjectId}],
   content : String,
   dataCreate: { type: Date , default: Date.now},
   dateUpdate: { type: Date , default: Date.now},
   status: { type: Boolean , default: true}
},{ collection: 'commentReview' });

export const CommentReview = mongoose.model('commentReview', commentReviewModel);