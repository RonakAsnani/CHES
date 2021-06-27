import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    contributors: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const ArticleMessage = mongoose.model('ArticleMessage', articleSchema);

export default ArticleMessage;