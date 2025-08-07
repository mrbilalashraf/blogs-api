const express = require('express');
const router = express.Router();
const multer = require('multer');
const LZString = require('lz-string');
const connection = require('../database/sql');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('coverImage'), (req, res) => {
    const { title, content, createdAt } = req.body;
    const mysqlDateTime = new Date(createdAt).toISOString().slice(0, 19).replace('T', ' ');
    console.log(req.body);
    console.log('File:', req.file);
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newBlog = {
        title,
        content,
        cover_image: req.file ? req.file.filename : null,
        created_at: mysqlDateTime
    };

    console.log(newBlog);
    connection.query(
        'INSERT INTO blogs SET ?', newBlog, (error, results) => {
            if (error) {
                console.error('Error inserting blog into database:', error);
                return res.status(500).json({ error: 'Failed to create blog' });
            }
            console.log('Blog inserted into database:', results);
            res.status(201).json(newBlog);
        }
    );
});

module.exports = router;