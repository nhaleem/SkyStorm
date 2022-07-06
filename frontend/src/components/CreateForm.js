
import flightsStore from "../stores/flightsStore";
import './App.css';


export default function CreateForm() {
  const store = flightsStore();

//   if (store.updateForm._id) 

  return (
        <>
            <h5 className="sidebar-title">Add Flight</h5>
                <form onSubmit={store.createFlight}>

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="flightNumber"
                    placeholder="Flight Number"
                    />
                    
                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="passengerLimit"
                    placeholder="Passenger Limit"
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="currentPassengers"
                    placeholder="Curr Passengers"
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="arrivalAirport"
                    placeholder="Arr Airport"
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="arrivalDate"
                    placeholder="Arr Date"
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="arrivalTime"
                    placeholder="Arr Time"
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="departureAirport"
                    placeholder="Dep Airport"
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="departureDate"
                    placeholder="Dep Date"
                    />

                    <input
                    className="inputform"
                    onChange={store.updateCreateFormField}
                    value={store.createForm.title}
                    name="departureTime"
                    placeholder="Dep Time"
                    />
                
                    <div class="add-flight-button">
                    <button type="submit" class="btn btn-warning btn-sm">Submit</button>
                    </div>
                </form>
            </>
        );
}