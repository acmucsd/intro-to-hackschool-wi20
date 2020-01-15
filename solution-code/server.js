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
let iceCreams = {
    "chocolate": 1.50,
    "vanilla": 1.50
};
const recommended = "chocolate";

// Gets all the ice creams in the array
app.get('/getData', (req, res) => {
    res.json(iceCreams);
});

app.get('/resetData', (req, res) => {
    iceCreams = {};
    res.redirect('/');
});

// Inserting an ice cream.
app.post('/insertData', (req, res) => {
    const params = req.body;
    iceCreams[params.flavor] = params.cost;
    res.redirect('/');
});

// TODO: Write a GET request to retreive the recommended 
//       ice cream flavor.
app.get('/recommendation', (req,res) => {
    // We will be returning the recommended flavor based on cheapest price.
    let min = Number.MAX_VALUE;
    let flavor = "";
    for (let i in iceCreams) {
        if (iceCreams[i] < min) {
            min = iceCreams[i];
            flavor = i;
        };
    };
    const response = {
        "favorite": flavor
    };
    res.json(response);
});

