const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredNumber = {
    type: Number,
    required: true
}

const defaultRequiredDate = {
    type: Date,
    default: Date.now,
    required: true
}

var logEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    comments: String,
    image: String,
    rating: {
        type: Number,
        min: 0,
        max: 12,
        default: 10
    },
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180
    },
    visitDate: {
        type: Date,
        required: true
    },
    // timestamps: true
});

const logEntry = mongoose.model('logEntry', logEntrySchema);

module.exports = logEntry;