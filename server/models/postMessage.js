//Mongoose

import mongoose from 'mongoose';

//Schema - uniformity to our documents; each post will have to have these things
const postSchema = mongoose.Schema({
    title: String,
    note: String,
    course: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//turn into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;