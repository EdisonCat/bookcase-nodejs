const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    authorId: { type: String, required: true }
});

//module.exports = bookSchema;
module.exports = mongoose.model('Book', bookSchema);