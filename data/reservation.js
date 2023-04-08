require('dotenv').config();
const mongodb = require('mongodb');
const {connection} = require("./connection");
const Reservation = require("../models/Reservation");


async function addReservation(reservation){
    console.log(reservation)
    try {
    const newReservation = new Reservation({
        nameStudent: reservation.nameStudent,
        date: reservation.date,
        time: reservation.time,
    });
    console.log(newReservation);
    const exists = await reservationExist(newReservation)

    if(exists){
        return "Ya existe una reserva para esa fecha y hora"
    }
    
    const result = await newReservation.save();
    return result;
    } catch (e) {
        console.log(e)
        return e
    } 
}

async function getReservations () {
    const reservations = await Reservation.find({});
    console.log(reservations)
}  

async function reservationExist(reservation){
    const result = await Reservation.find({
        date: reservation.date,
        time: reservation.time
    });
    console.log("find" + result)
    return result.length > 0 ? true : false;
}

module.exports = { getReservations, addReservation };