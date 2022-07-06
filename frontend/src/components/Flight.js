import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';
import flightsStore from "../stores/flightsStore";
import "../assets/app.css";




export default function Flight({ flight }) {

  const store = flightsStore((store) => {
    return { deleteFlight: store.deleteFlight, toggleUpdate: store.toggleUpdate };
  });

  return (

    <div key={flight._id}>
      <h3>{flight.title}</h3>
      

              <Table class="maincontent" striped borderless responsive="sm" size="sm" hover variant="dark">
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
                      <td><ProgressBar variant="info" now={((flight.currentPassengers/flight.passengerLimit)*100)} /></td>
                      <td>{flight.arrivalAirport}</td>
                      <td>{flight.arrivalDate}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>{flight.departureAirport}</td>
                      <td>{flight.departureDate}</td>
                      <td>{flight.departureTime}</td>
                    </tr>
                  </tbody>
              </Table>

                    <div className="modify-buttons">
                      <ButtonToolbar aria-label="Toolbar with button groups">
                          <ButtonGroup className="me-2" aria-label="First group">
                                <Button className="form-buttons" variant="link" style={{color: "pink"}} size="sm" onClick={() => store.deleteFlight(flight._id)}>Delete</Button>
                          </ButtonGroup>
                          <ButtonGroup className="me-2" aria-label="Second group">
                                <Button className="form-buttons" variant="link" style={{color: "pink"}} size="sm" onClick={() => store.toggleUpdate(flight)}>Update</Button>
                          </ButtonGroup>
                      </ButtonToolbar>
                    </div>
    </div>
  );
  
}
