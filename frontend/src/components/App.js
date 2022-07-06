import { useState, useEffect } from "react";
import flightsStore from "../stores/flightsStore";
import Flights from "./Flights";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";
import Navbar from "./Navbar";
import "../assets/app.css";
import analyticsicon from "../assets/icon.png";


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
            <section class="content">
                <div class="columns">
                    <main class="main">
                        <Flights />
                        <div className="analytics-div">
                            <img src={analyticsicon} className="analyticsicon" alt="analytics-icon" title="Analytics (BETA)" />
                        </div>
                    </main>
                    <aside class="sidebar-first"><CreateForm /></aside>
                    <aside class="sidebar-second"><UpdateForm /></aside>
                </div>
            </section>
        </div>

    </>
    );
}

export default App;