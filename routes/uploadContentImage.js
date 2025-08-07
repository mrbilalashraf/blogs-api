const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('contentImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No content image uploaded' });
  }

  const imageUrl = `http://localhost:4000/images/${req.file.filename}`;
  console.log('Image URL:', imageUrl);
  res.status(200).json({ url: imageUrl });
});

module.exports = router;