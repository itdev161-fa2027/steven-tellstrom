//customary to uppercase model names like in other languages. 
//use mongoose schema here.

import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    user: { //relational piece, user that creates / owns the post
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //users id
        required: true,
    },
    title: {
        type: String,
        required:  true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
    },
    createDate: { //controlled (automated) on the server, 
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;