import create from "zustand";
import axios from "axios";

const flightsStore = create((set) => ({
  flights: null,

  createForm: {
    flightNumber: '',
    passengerLimit: '',
    currentPassengers: '',
    arrivalAirport: '',
    arrivalDate: '',
    arrivalTime: '',
    departureAirport: '',
    departureDate: '',
    departureTime: '',
  },

  updateForm: {
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
  },

  fetchFlights: async () => {
    // Fetch the flights
    const res = await axios.get("http://localhost:8080/flights");

    // Set to state
    set({ flights: res.data.flights });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createFlight: async (e) => {
    e.preventDefault();

    const { createForm, flights } = flightsStore.getState();
    const res = await axios.post("http://localhost:8080/flights", createForm);

    set({
      flights: [...flights, res.data.flight],
      createForm: {
        flightNumber: '',
        passengerLimit: '',
        currentPassengers: '',
        arrivalAirport: '',
        arrivalDate: '',
        arrivalTime: '',
        departureAirport: '',
        departureDate: '',
        departureTime: '',
      },
    });
  },

  deleteFlight: async (_id) => {
    // Delete the flight
    const res = await axios.delete(`http://localhost:8080/flights/${_id}`);
    const { flights } = flightsStore.getState();

    // Update state
    const newFlights = flights.filter((flight) => {
      return flight._id !== _id;
    });

    set({ flights: newFlights });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, flightNumber, passengerLimit, currentPassengers, arrivalAirport, arrivalDate, arrivalTime, departureAirport, departureDate, departureTime }) => {
    set({
      updateForm: {
        flightNumber,
        passengerLimit,
        currentPassengers,
        arrivalAirport,
        arrivalDate,
        arrivalTime,
        departureAirport,
        departureDate,
        departureTime,
        _id,
      },
    });
  },

  updateFlight: async (e) => {
    e.preventDefault();

    const {
      updateForm: { flightNumber, passengerLimit, currentPassengers, arrivalAirport, arrivalDate, arrivalTime, departureAirport, departureDate, departureTime, _id },
      flights,
    } = flightsStore.getState();

    // Send the update request
    const res = await axios.put(`http://localhost:8080/flights/${_id}`, {
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

    // Update state
    const newFlights = [...flights];
    const flightIndex = flights.findIndex((flight) => {
      return flight._id === _id;
    });
    newFlights[flightIndex] = res.data.flight;

    set({
      flights: newFlights,
      updateForm: {
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
      },
    });
  },
}));

export default flightsStore;