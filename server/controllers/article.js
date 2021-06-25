import mongoose from 'mongoose';

import ArticleMessage from '../models/articleMessage.js';

export const getArticles = async (req, res) => {
    try {
        const articleMessages = await ArticleMessage.find();

        res.status(200).json(articleMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createArticle = async (req, res) => {
    const article = req.body;

    const newArticle = new ArticleMessage(article);

    res.status(201).json({ newArticle });
    try {
        await newArticle.save();
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

   
}

export const updateArticle = async (req, res) => {
    const { id: _id } = req.params;
    const article = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No article with that id');

    const updatedArticle = await ArticleMessage.findByIdAndUpdate(_id, {...article, _id}, { new: true });
    
    res.json(updatedArticle);
}

export const deleteArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No article with that id');

    await ArticleMessage.findByIdAndRemove(id);
    
    res.json({message: "Post Deleted"});
}