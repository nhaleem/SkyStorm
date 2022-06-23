/**
 * This file creates an Express server,
 * connects to the MongoDB database and,
 * defined the routing for the HTTP Methods.
 * 
 * 
 * QUICK START GUIDES FOR REFERENCE:
 * 
 * Express: https://expressjs.com/en/starter/hello-world.html
 * CORS: https://expressjs.com/en/resources/middleware/cors.html
 * DotEnv: https://www.npmjs.com/package/dotenv
 * Mongoose: https://mongoosejs.com/docs/
 * 
 */


// Load .env variables
require('dotenv').config();

  
// Import dependencies
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const flightsController = require('./controllers/flights.controller.js');
const figlet = require("figlet")

  
// Create an Express app
const app = express();

  
// Setup the Express app to use JSON and CORS
app.use(express.json());
app.use(cors());


// Start the server
app.listen(process.env.PORT);
    console.log("");
    console.log(`Server running on port ${process.env.PORT}`);

// Create and call function to connect to database
async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connect to MongoDB Database');
        console.log('');
        console.log("** Welcome to SkyStorm Flight Management **");
        figlet.text('SkyStorm', function (err, data){console.log(data)})
        console.log("");
    } catch (err) {
        console.log(err);
    }
}

dbConnect();

  
// Routing for HTTP methods
app.get('/flights', flightsController.getFlights);
app.get('/flights/:id', flightsController.getFlight);
app.post('/flights', flightsController.createFlight);
app.put('/flights/:id', flightsController.updateFlight);
app.delete('/flights/:id', flightsController.deleteFlight);