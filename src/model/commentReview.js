import { Schema, ObjectId ,mongoose } from "mongoose";

const commentReviewSchema = new Schema ({
   id_profile_autor: ObjectId,
   comment: { type : ObjectId, ref: 'comment'},
   userLike: [{id_profile: {type:ObjectId, ref: 'profile'}}],
   content : String,
   dataCreate: { type: Date , default: Date.now},
   dateUpdate: { type: Date , default: Date.now},
   status: { type: Boolean , default: true}
},{ collection: 'commentReview' });

export const CommentReview = mongoose.model('commentReview', commentReviewSchema);