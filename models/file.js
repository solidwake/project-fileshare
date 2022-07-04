const mongoose = require('mogoose');

const File = new mongoose.Schema({
    path: {
        type: String,
        required: true
    }
});