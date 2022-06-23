const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: String,
    passengerLimit: Number,
    currentPassengers: Number,
    arrivalAirport: String,
    arrivalDate: String,
    arrivalTime: String,
    departureAirport: String,
    departureDate: String,
    departureTime: String,
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
