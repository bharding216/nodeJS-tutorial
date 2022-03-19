//take the node package stuff and save it to this variable called express
const express = require('express');
//you are creating an app and calling it "express"
const app = express();
//the app will listen for requests. you specify a port that it lives at.
app.listen(3000, () => console.log('listening at 3000'));

//at this point, you have successfully created a server that is listening for requests

//when you deploy your server to your website url and people type in the url, you
//want to be able to send them your html, js, css, etc for them to be able to see in their 
//browser.

//the server that you created "serves" your url. it serves the people wanting to visit
//your url