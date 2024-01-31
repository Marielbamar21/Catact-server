import { Schema, ObjectId, mongoose } from "mongoose";

const profileModel = new Schema({

    id_user :  ObjectId,
    profileImage : [{ id_profileImage: ObjectId}],
    post: [{ id_post : ObjectId}],
    follower: [{id_follower : ObjectId}],
    byfollowing: [{id_following : ObjectId}],
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    status: { type: Boolean , default: true}


},{ collection: 'profile' });

profileModel.pre('save', (next) => {
    dateUpdate = new Date();
    next();
});
export const Profile = mongoose.model('profile', profileModel);