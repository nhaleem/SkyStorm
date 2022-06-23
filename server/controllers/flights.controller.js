const Flight = require("../models/flight");

const fetchFlights = async (req, res) => {
  // Find the flights
  const flights = await Flight.find();

  // Respond with them
  res.json({ flights });
};

const fetchFlight = async (req, res) => {
  // Get id off the url
  const flightId = req.params.id;

  // Find the flight using that id
  const flight = await Flight.findById(flightId);

  // Respond with the flight
  res.json({ flight });
};

const createFlight = async (req, res) => {
  // Get the sent in data off request body
  const { flightNumber, passengerLimit, currentPassengers, arrivalAirport, arrivalDate, arrivalTime, departureAirport, departureDate, departureTime } = req.body;

  // Create a flight with it
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

  // respond with the new flight
  res.json({ flight });
};

const updateFlight = async (req, res) => {
  // Get the id off the url
  const flightId = req.params.id;

  // Get the data off the req body
  const { flightNumber, passengerLimit, currentPassengers, arrivalAirport, arrivalDate, arrivalTime, departureAirport, departureDate, departureTime } = req.body;

  // Find and update the record
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

  // Find updated flight
  const flight = await Flight.findById(flightId);

  // Respond with it
  res.json({ flight });
};

const deleteFlight = async (req, res) => {
  // get id off url
  const flightId = req.params.id;

  // Delete the record
  await Flight.deleteOne({ id: flightId });

  // Respond
  res.json({ success: "Flight record deleted" });
};

module.exports = {
  fetchFlights,
  fetchFlight,
  createFlight,
  updateFlight,
  deleteFlight,
};