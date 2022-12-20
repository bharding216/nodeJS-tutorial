// Take the nodeJS package contents and save it to a variable named "express"
const express = require('express');
const Datastore = require('nedb');

// Create an app and call it "express"
const app = express();

// Listen for requests at port 3000
app.listen(3000, () => console.log('listening at 3000'));

// Define the directory for your static files
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

// Create the db and save it locally (for now)
const database = new Datastore('database.db');
database.loadDatabase();

// Create a view function that will send a request to the server and accept 
// a response from the server. 
app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp 

    // Add timestamp to the local db
    database.insert(data);

    response.json({
        status: 'success',
        timestamp: timestamp,
        latitude: data.lat,
        longitude: data.lon,
    });
});
