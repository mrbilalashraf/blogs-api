const express = require('express');
const router = express.Router();
const connection = require('../database/sql');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM blogs', (error, results) => {
        if (error) {
            console.error('Error fetching blogs from database:', error);
            return res.status(500).json({ error: 'Failed to fetch blogs' });
        }
        console.log('Blogs fetched from database:', results);
        res.status(200).json(results);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM blogs WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error fetching blog from database:', error);
            return res.status(500).json({ error: 'Failed to fetch blog' });
        }
        console.log('Blog fetched from database:', results);
        res.status(200).json(results);
    });
});

module.exports = router;