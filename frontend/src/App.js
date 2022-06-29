/**
 * QUICK START GUIDES FOR REFERENCE:
 * Axios: https://axios-http.com/docs/example
 */

import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State
  const [flights, setFlights] = useState(null);
  const [createForm, setCreateForm] = useState({
    flightNumber: '',
    passengerLimit: '',
    currentPassengers: '',
    arrivalAirport: '',
    arrivalDate: '',
    arrivalTime: '',
    departureAirport: '',
    departureDate: '',
    departureTime: '',
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    flightNumber: '',
    passengerLimit: '',
    currentPassengers: '',
    arrivalAirport: '',
    arrivalDate: '',
    arrivalTime: '',
    departureAirport: '',
    departureDate: '',
    departureTime: '',
  });


  // Use effect
  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    // Fetch the flights
    const res = await axios.get("http://localhost:8080/flights");

    // Set to state
    setFlights(res.data.flights);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createFlight = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/flights", createForm);

    setFlights([...flights, res.data.flight]);

    setCreateForm({
      flightNumber: '',
      passengerLimit: '',
      currentPassengers: '',
      arrivalAirport: '',
      arrivalDate: '',
      arrivalTime: '',
      departureAirport: '',
      departureDate: '',
      departureTime: '',
    });
  };

  const deleteFlight = async (_id) => {
    // Delete the flight
    const res = await axios.delete(`http://localhost:8080/flights/${_id}`);

    // Update state
    const newFlights = [...flights].filter((flight) => {
      return flight._id !== _id;
    });

    setFlights(newFlights);
  };

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (flight) => {
    // Set state on update form
    setUpdateForm({ 
      flightNumber: flight.flightNumber,
      passengerLimit: flight.passengerLimit,
      currentPassengers: flight.currentPassengers,
      arrivalAirport: flight.arrivalAirport,
      arrivalDate: flight.arrivalDate,
      arrivalTime: flight.arrivalTime,
      departureAirport: flight.departureAirport,
      departureDate: flight.departureDate,
      departureTime: flight.departureTime,
      _id: flight._id
    });
  };

  const updateFlight = async (e) => {
    e.preventDefault();

    const {
      flightNumber,
      passengerLimit,
      currentPassengers,
      arrivalAirport,
      arrivalDate,
      arrivalTime,
      departureAirport,
      departureDate,
      departureTime
    } = updateForm;

    // Send the update request
    const res = await axios.put(
      `http://localhost:8080/flights/${updateForm._id}`,
      { 
        flightNumber,
        passengerLimit,
        currentPassengers,
        arrivalAirport,
        arrivalDate,
        arrivalTime,
        departureAirport,
        departureDate,
        departureTime
      }
    );

    // Update state
    const newFlights = [...flights];
    const flightIndex = flights.findIndex((flight) => {
      return flight._id === updateForm._id;
    });
    newFlights[flightIndex] = res.data.flight;

    setFlights(newFlights);

    // Clear update form state
    setUpdateForm({
      _id: null,
      flightNumber: '',
      passengerLimit: '',
      currentPassengers: '',
      arrivalAirport: '',
      arrivalDate: '',
      arrivalTime: '',
      departureAirport: '',
      departureDate: '',
      departureTime: '',
    });
  };

  return (
    <div className="App">
      <div>
        <h2>Flights:</h2>
        {flights &&
          flights.map((flight) => {
            return (
              <div key={flight._id}>
                <h3>{flight.flightNumber}</h3>
                <button onClick={() => deleteFlight(flight._id)}>
                  Delete flight
                </button>
                <button onClick={() => toggleUpdate(flight)}>Update flight</button>
              </div>
            );
          })}
      </div>

      {updateForm._id && (
        <div>
          <h2>Update flight</h2>
          <form onSubmit={updateFlight}>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.flightNumber}
                name="flightNumber"
                placeholder="Flight Number"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.arrivalAirport}
                name="arrivalAirport"
                placeholder="Arrival Airport"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.arrivalDate}
                name="arrivalDate"
                placeholder="Arrival Date"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.arrivalTime}
                name="arrivalTime"
                placeholder="Arrival Time"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.departureAirport}
                name="departureAirport"
                placeholder="Departure Airport"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.departureDate}
                name="departureDate"
                placeholder="Departure Date"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.departureTime}
                name="departureTime"
                placeholder="Departure Time"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.passengerLimit}
                name="passengerLimit"
                placeholder="Passenger Limit"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={handleUpdateFieldChange}
                value={updateForm.currentPassengers}
                name="currentPassengers"
                placeholder="Current Passengers"
              />
            </div>
            <br />
            <button type="submit">Update flight</button>
          </form>
        </div>
      )}

      {!updateForm._id && (
        <div>
          <h2>Create flight</h2>
          <form onSubmit={createFlight}>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.flightNumber}
                name="flightNumber"
                placeholder="Flight Number"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.arrivalAirport}
                name="arrivalAirport"
                placeholder="Arrival Airport"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.arrivalDate}
                name="arrivalDate"
                placeholder="Arrival Date"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.arrivalTime}
                name="arrivalTime"
                placeholder="Arrival Time"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.departureAirport}
                name="departureAirport"
                placeholder="Departure Airport"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.departureDate}
                name="departureDate"
                placeholder="Departure Date"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.departureTime}
                name="departureTime"
                placeholder="Departure Time"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.passengerLimit}
                name="passengerLimit"
                placeholder="Passenger Limit"
              />
            </div>
            <div>
              <input
                className="inputform"
                onChange={updateCreateFormField}
                value={createForm.currentPassengers}
                name="currentPassengers"
                placeholder="Current Passengers"
              />
            </div>
            <br />
            <button type="submit">Create flight</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;


































