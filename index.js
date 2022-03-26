//take the node package stuff and save it to this variable called express
const express = require('express');
const Datastore = require('nedb');

//you are creating an app and calling it "express"
const app = express();

//the app will listen for requests. you specify a port that it lives at.
//the server on your computer that runs locally at port 3000
app.listen(3000, () => console.log('listening at 3000'));

//at this point, you have successfully created a server that is listening for requests

//when you deploy your server to your website url and people type in the url, you
//want to be able to send them your html, js, css, etc for them to be able to see in their 
//browser.

//the server that you created "serves" your url. it serves the people wanting to visit
//your url

//create a folder called public. This folder will house all documents
//that the url will request
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
//post routing method. Youre setting up where you want to receive the post
//youre setting up an API for clients to send data to you

//here you are creating the database and saving it locally on your laptop
//you are creating a Datastore function
const database = new Datastore('database.db');
database.loadDatabase();


//the function has two aurguments (request and repsonse). Request is all the stuff
//going from the client to the server, response is anything sent from the server to the client.
app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp 

    database.insert(data);

    response.json({
        status: 'success',
        timestamp: timestamp,
        //here you create lat and lon within the variable called "data"
        latitude: data.lat,
        longitude: data.lon,
    });
});