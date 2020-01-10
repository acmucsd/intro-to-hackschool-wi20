const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

// Needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Needed for HTML file to load CSS files
app.use(express.static(__dirname + "/public"));

// Default endpoint 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// List of ice cream flavors
const iceCreams = ["chocolate", "vanilla"];
const recommended = "chocolate";

// Inserting an ice cream
app.post('/insertData', (req, res) => {
    const params = req.body;
    iceCreams.push(params.flavor);
    res.redirect('/');
});

// Gets all the ice creams in the array
app.get('/getData', (req, res) => {
    res.send(iceCreams.toString());
});

// TODO: Write a POST request to insert your favorite ice
//       cream flavor (using the "recommended" variable).
app.post('/insertFavorite', (req, res) => {
    
});

// TODO: Write a GET request gets 
app.get('/recommendation', (req,res) => {
    
});

