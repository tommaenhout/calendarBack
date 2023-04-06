var express = require("express");
var router = express.Router();
const data = require("../data/reservation");


router.get("/reservations", async (req, res) => {
    const reservations = await data.getReservations();
    res.json(reservations);
});

router.post("/reservations", async (req, res) => {
    const reservation = req.body;
    const newReservation = await data.addReservation(reservation);
    res.json(newReservation);
});

module.exports = router;


