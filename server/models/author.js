const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
});

module.exports = mongoose.model('Author', authorSchema);