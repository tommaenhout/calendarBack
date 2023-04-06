require('dotenv').config();
const mongodb = require('mongodb');
const {connection} = require("./connection");
const Reservation = require("../models/Reservation");


async function addReservation(reservation){
    const newReservation = new Reservation({
        nameStudent: reservation.nameStudent,
        date: reservation.date,
        time: reservation.time,
    });
    console.log(newReservation);
    const result = await newReservation.save();
    return result;
}

async function getReservations () {
    const reservations = await Reservation.find({});
    console.log(reservations)
}   

module.exports = { getReservations, addReservation };