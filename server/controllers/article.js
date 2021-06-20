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