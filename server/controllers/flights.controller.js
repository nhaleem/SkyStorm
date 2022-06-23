const Flight = require("../models/flight");


// Get ALL flights
const getFlights = async (req, res) => {
  const flights = await Flight.find();
  res.json({ flights });
};


// Get ONE flight
const getFlight = async (req, res) => {
  const flightId = req.params.id;
  const flight = await Flight.findById(flightId);
  res.json({ flight });
};


// Post (create) a flight
const createFlight = async (req, res) => {
  const { flightNumber, passengerLimit, currentPassengers, arrivalAirport, arrivalDate, arrivalTime, departureAirport, departureDate, departureTime } = req.body;

  const flight = await Flight.create({
    flightNumber,
    passengerLimit,
    currentPassengers,
    arrivalAirport,
    arrivalDate,
    arrivalTime,
    departureAirport,
    departureDate,
    departureTime,
  });

  res.json({ flight });
};


// Put (update) a flight
const updateFlight = async (req, res) => {
  const flightId = req.params.id;

  const { flightNumber, passengerLimit, currentPassengers, arrivalAirport, arrivalDate, arrivalTime, departureAirport, departureDate, departureTime } = req.body;

  await Flight.findByIdAndUpdate(flightId, {
    flightNumber,
    passengerLimit,
    currentPassengers,
    arrivalAirport,
    arrivalDate,
    arrivalTime,
    departureAirport,
    departureDate,
    departureTime,
  });

  const flight = await Flight.findById(flightId);

  res.json({ flight });
};


// Delete a flight
const deleteFlight = async (req, res) => {
  const flightId = req.params.id;

  await Flight.deleteOne({ id: flightId });

  res.json({ success: "Flight record deleted" });
};


module.exports = {
  getFlights,
  getFlight,
  createFlight,
  updateFlight,
  deleteFlight,
};