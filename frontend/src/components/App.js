/**
 * QUICK START GUIDES FOR REFERENCE:
 * Axios: https://axios-http.com/docs/example
 */

 import Navbar from "./Navbar"
 import { useState, useEffect } from "react";
 import axios from "axios";
 import {Table} from 'react-bootstrap';
 import {Button} from 'react-bootstrap';
 import {ButtonToolbar} from 'react-bootstrap';
 import {ButtonGroup} from 'react-bootstrap';
 import {ProgressBar} from 'react-bootstrap';
 import './App.css';

 
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
    <>
    <Navbar />
       <div class="page">
         <div className="App">
           <div className="content-wrapper">
             <div className="content">

               {flights &&
                 flights.map((flight) => {
                   return (
                     <div key={flight._id}>

              <Table striped borderless responsive="sm" size="sm" hover variant="dark">
                            <thead class="thead">
                              <tr>
                                <th>Flight No.</th>
                                <th>Seat Limit</th>
                                <th>Curr Seats</th>
                                <th>Capacity</th>
                                <th>Arr Airport</th>
                                <th>Arr Date</th>
                                <th>Arr Time</th>
                                <th>Dep Airport</th>
                                <th>Dep Date</th>
                                <th>Dep Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{flight.flightNumber}</td>
                                <td>{flight.passengerLimit}</td>
                                <td>{flight.currentPassengers}</td>
                                <td><ProgressBar now={((flight.currentPassengers/flight.passengerLimit)*100)} /></td>
                                <td>{flight.arrivalAirport}</td>
                                <td>{flight.arrivalDate}</td>
                                <td>{flight.arrivalTime}</td>
                                <td>{flight.departureAirport}</td>
                                <td>{flight.departureDate}</td>
                                <td>{flight.departureTime}</td>
                              </tr>
                            </tbody>
                        </Table>

                        <div className="modify-buttons" align="center">
                        <ButtonToolbar aria-label="Toolbar with button groups">
                          <ButtonGroup className="me-2" aria-label="First group">
                            <Button className="form-buttons" variant="warning" size="sm" onClick={() => deleteFlight(flight._id)}>Delete</Button>
                          </ButtonGroup>
                          <ButtonGroup className="me-2" aria-label="Second group">
                          <Button className="form-buttons" variant="warning" size="sm" onClick={() => toggleUpdate(flight)}>Update</Button>
                          </ButtonGroup>
                        </ButtonToolbar>

                        </div>
                     </div>
                   );
                 })}
               </div>
           </div>
 
           <div className="sidebar">      
             {updateForm._id && (
               <div>
                 <h5 className="sidebar-title">Update Flight</h5>
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
              
                   <br />
                   <button type="submit" class="btn btn-dark  btn-sm">Update</button>
                 </form>
               </div>
             )}
 
             {!updateForm._id && (
               <div>
                 <h5 className="sidebar-title">Add Flight</h5>
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
            
                   <br />
                   <button type="submit" class="btn btn-dark  btn-sm">Submit</button>
                 </form>
               </div>
             )}
           </div>
         </div>
       </div>
       </>
   );
   
 }
 
 export default App; 
 
 
 
 
 
 