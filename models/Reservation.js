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
        type: Number,
        required: true
    }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
