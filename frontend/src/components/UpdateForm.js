import flightsStore from "../stores/flightsStore";

export default function UpdateForm() {
  const store = flightsStore();

  // if (!store.updateForm._id) return <></>;

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
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.passengerLimit}
                      name="passengerLimit"
                      placeholder="Passenger Limit"
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.currentPassengers}
                      name="currentPassengers"
                      placeholder="Curr Passengers"
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.arrivalAirport}
                      name="arrivalAirport"
                      placeholder="Arr Airport"
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.arrivalDate}
                      name="arrivalDate"
                      placeholder="Arr Date"
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.arrivalTime}
                      name="arrivalTime"
                      placeholder="Arr Time"
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.departureAirport}
                      name="departureAirport"
                      placeholder="Dep Airport"
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.departureDate}
                      name="departureDate"
                      placeholder="Dep Date"
                    />

                    <input
                      className="inputform"
                      onChange={store.handleUpdateFieldChange}
                      value={store.updateForm.departureTime}
                      name="departureTime"
                      placeholder="Dep Time"
                    />

                    <button type="submit" class="btn btn-dark btn-sm">Update</button>
                  </form>
          </>
        );
      }