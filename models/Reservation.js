const mongoose = require("mongoose");


const reservationSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    nameStudent : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});
