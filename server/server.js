/**
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

  
// Create an Express app
const app = express();

  
// Setup the Express app to use JSON and CORS
app.use(express.json());
app.use(cors());


// Start the server
app.listen(process.env.PORT);


// Create and call function to connect to database
async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connect to MongoDB Database");
    } catch (err) {
        console.log(err);
    }
}

dbConnect();

  
// HTTP methods & routes
app.get('/flights', flightsController.getFlights);
app.get('/flights/:id', flightsController.getFlight);
app.post('/flights', flightsController.createFlight);
app.put('/flights/:id', flightsController.updateFlight);
app.delete('/flights/:id', flightsController.deleteFlight);