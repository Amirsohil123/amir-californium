const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema( {
    name: String,
    headquarter:String
}, { timestamps: true });

module.exports = mongoose.model('LibraryPublisher', PublisherSchema)