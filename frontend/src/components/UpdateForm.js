import flightsStore from "../stores/flightsStore";

export default function UpdateForm() {
  const store = flightsStore();

  if (store.updateForm.currentPassengers > store.updateForm.passengerLimit) {
    window.alert("Passenger count must be equal to or less than: " + store.updateForm.passengerLimit);
    store.updateForm.currentPassengers = "";
  } 

  return (
          <>
                <h5 className="sidebar-title">Update Flight</h5>
                  <form onSubmit={store.updateFlight}>

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.flightNumber}
                      name="flightNumber"
                      placeholder="Flight Number"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.passengerLimit}
                      name="passengerLimit"
                      placeholder="Passenger Limit"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.currentPassengers}
                      name="currentPassengers"
                      placeholder="Curr Passengers"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.arrivalAirport}
                      name="arrivalAirport"
                      placeholder="Arr Airport"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.arrivalDate}
                      name="arrivalDate"
                      placeholder="Arr Date"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.arrivalTime}
                      name="arrivalTime"
                      placeholder="Arr Time"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.departureAirport}
                      name="departureAirport"
                      placeholder="Dep Airport"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.departureDate}
                      name="departureDate"
                      placeholder="Dep Date"
                      required
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.departureTime}
                      name="departureTime"
                      placeholder="Dep Time"
                      required
                    />

                    <div class="update-flight-button">
                    <button type="submit" class="btn btn-warning btn-sm">Update</button>
                    </div>
                  </form>
          </>
        );
      }