require('dotenv').config();
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();

const upload = multer({ dest: 'uploads' });

mongoose.connect(process.env.DATABASE_URL);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Hi')
});

app.listen(process.env.PORT);