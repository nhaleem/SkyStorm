import { useState, useEffect } from "react";
import flightsStore from "../stores/flightsStore";
import Flights from "./Flights";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";
import Navbar from "./Navbar";
import "./App.css";


function App() {
    const store = flightsStore();

    // Use effect
    useEffect(() => {
    store.fetchFlights();
    }, []);

    return (
    <>
        <Navbar />

        <div class="wrapper">
            {/* <header class="header">Header: Fixed height</header> */}
            <section class="content">
                <div class="columns">
                    <main class="main"><Flights /></main>
                    <aside class="sidebar-first"><CreateForm /></aside>
                    <aside class="sidebar-second"><UpdateForm /></aside>
                </div>
            </section>
            {/* <footer class="footer">Footer: Fixed height</footer> */}
        </div>

    </>
    );
}

export default App;