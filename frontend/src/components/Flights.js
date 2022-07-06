import flightsStore from "../stores/flightsStore";
import Flight from "./Flight";

export default function Flights() {
  const store = flightsStore();

  return (
    <div>
      {store.flights && store.flights.map((flight) => { 
          return <Flight flight={flight} key={flight._id} 
           />;

           
        })}
    </div>
  );
}