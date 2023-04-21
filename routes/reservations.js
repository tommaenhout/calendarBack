var express = require("express");
var router = express.Router();
const data = require("../data/reservation");



router.get("/", async (req, res) => {
    try {
        const reservations = await data.getReservations();
        console.log("reservations" + reservations)
        res.json(reservations);
       
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.post("/", async (req, res) => {
    const reservation = req.body;
    console.log(reservation);
    const newReservation = await data.addReservation(reservation);
    res.json(newReservation);
});

module.exports = router;


