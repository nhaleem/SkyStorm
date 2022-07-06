
import flightsStore from "../stores/flightsStore";
import "../assets/app.css";


export default function CreateForm() {
  const store = flightsStore();

  if (store.createForm.currentPassengers > store.createForm.passengerLimit) {
    window.alert("Passenger count must be equal to or less than: " + store.createForm.passengerLimit);
    store.createForm.currentPassengers = "";
  }
  

  return (
        <>
            <h5 className="sidebar-title">Add Flight</h5>
                <form onSubmit={store.createFlight}>

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.flightNumber}
                    name="flightNumber"
                    placeholder="Flight Number"
                    required
                    />
                    
                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.passengerLimit}
                    name="passengerLimit"
                    placeholder="Passenger Limit"
                    required
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.currentPassengers}
                    name="currentPassengers"
                    placeholder="Curr Passengers"
                    required
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.arrivalAirport}
                    name="arrivalAirport"
                    placeholder="Arr Airport"
                    required
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.arrivalDate}
                    name="arrivalDate"
                    placeholder="Arr Date"
                    required
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.arrivalTime}
                    name="arrivalTime"
                    placeholder="Arr Time"
                    required
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.departureAirport}
                    name="departureAirport"
                    placeholder="Dep Airport"
                    required
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.departureDate}
                    name="departureDate"
                    placeholder="Dep Date"
                    required
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.departureTime}
                    name="departureTime"
                    placeholder="Dep Time"
                    required
                    />
                
                    <div class="add-flight-button">
                    <button type="submit" class="btn btn-warning btn-sm">Submit</button>
                    </div>
                </form>
            </>
        );
}