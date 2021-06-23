import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    content: {
        type: String,
    },
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const ArticleMessage = mongoose.model('ArticleMessage', articleSchema);

export default ArticleMessage;