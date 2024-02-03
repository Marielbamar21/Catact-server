import { Schema, ObjectId, mongoose } from "mongoose";


const profileSchema = new Schema({

    id_user :  {type:ObjectId, ref: 'user'},
    profileImage : [{id_profileImage:{type: ObjectId , ref: 'media'}}],
    post: [{id_post : {type: ObjectId , ref:'post'}}],
    follower: [{id_follower : {type:ObjectId , ref:'profile'}}],
    byfollowing: [{id_following : {type:ObjectId , ref:'profile'}}],
    dataCreate: { type: Date , default: Date.now},
    dateUpdate: { type: Date , default: Date.now},
    status: { type: Boolean , default: true}


},{ collection: 'profile' });



export const Profile = mongoose.model('profile', profileSchema);