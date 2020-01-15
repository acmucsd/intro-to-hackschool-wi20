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

// Returns the JSON of ice cream flavors along with its costs.
app.get('/getData', (req, res) => {

});

// Resets the list of ice cream flavors along with its prices to be empty
app.post('/resetData', (req, res) => {

});

// Inserts a key-value pair from the ice cream flavor to that flavor's cost.
app.post('/insertData', (req, res) => {

});

// Returns the recommended flavor of the day (finding the lowest costing item)
// in JSON. For example, the API will have a response that looks like this:
//  { "favorite": [cheapest flavor]}
app.get('/recommendation', (req,res) => {
    // We will be returning the recommended flavor based on cheapest price.
});

