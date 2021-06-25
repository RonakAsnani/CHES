import express from 'express';
import { getArticles, createArticle, updateArticle, deleteArticle, likeArticle } from '../controllers/article.js';
import multer from "multer";

const router = express.Router();

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file");

router.post("/uploadfiles", (req, res) => {
    upload(req, res, err => {
        if (err) {
            console.log(err);
            return res.json({ success: false, err });
        }
        console.log(res.req.file.path);
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
    });
});

router.get('/', getArticles);
router.post('/', createArticle);
router.patch('/:id', updateArticle);
router.delete('/:id', deleteArticle);
router.patch('/:id/likeArticle', likeArticle)

export default router;