# ACM x SWE: Introduction to Hack School (Winter 2020)

This workshop is meant to be an introduction to things you can learn by attending the rest of the Hack School workshops! 

## Resources
[Slides](http://acmurl.com/intro-to-hackschool-slides)

## Setup
This is the following software you will need to install for the workshop:  
- Download [node.js](http://acmurl.com/nodejs)
- Download a Text Editor (we recommend [VSCode](http://acmurl.com/nodejs))

Once you have downloaded the above software, clone or download this repository (click the green button on the top right).

## What is HTML?
HTML stands for Hypertext Markup Language, and defines the basic structure of any webpage. Different elements are defined by opening and closing tags, and most tags can have other tags inside them. Here are some basic tags that you might use: 

### Paragraph Tag
```html
<p>This is a paragraph tag.</p>
```
Defines paragraph content. Put any regular text in here. 

### Heading Tag
```html
<h1>This is a heading</h1>
<h2>This is another heading</h2>
```
Defines different levels of headings (HTML has 6 in total). 

### Image Tag
```html
<img src="image.jpg" alt="the thing didn't load"></img>
```
Loads in an image. Link to an image is given using the src attribute. Alt text can also be displayed if the image does not load. 

### Hyperlink Tag
```html
<a href="http://acm.ucsd.edu/">Click here to go to ACM's website!</a>
```
Defines a hyperlink. Clicking on the enclosed text will tell the browser to navigate to the link given by the href attribute. 

### Form tag
```html
<form>
  Enter your name: <input type="text"></input>
  <input type="submit" value="Submit"></input>
</form>
```
Defines a form, encapsulating data with all input tags inside. The form data can be sent to another webpage via HTTP request (more on that on part 4 when we talk about APIs).

### Head tag
```html
<head>
  <!-- metadata goes in here -->
</head>
```
Holds any metadata that goes in a webpage. This can include the website title, or any Javascript or CSS that the website requires. 

## HTML Attributes
HTML attributes provide more information about an element using a key-value pair. Above, we mentioned the *src* attribute in the **img** tag, which is used to specify which image we will display. Another important attribute is the *href* attribute, which is important in the **a** tag as it specifies which hyperlink to link to. We will talk about other important attributes below (most important is *class* and *id*).

## Intro to Javascript
We define functions using either the `functions` keyword or arrow notation: 
```javascript
function sum(a,b) {
  return a + b;
}

sum = (a,b) => a+b;
```
There are key differences between the two, though we'll be using them interchangably in this workshop. 

For more information, check out our Hack School workshop on JavaScript [here](https://github.com/acmucsd/hackschool/tree/master/part-2-intro-to-backend)!

## What is a server? 
A server is a computer that distributes content to all "clients" that connect to it through the internet. A server may have different routes so that depending on what each client wants, the server can send different content. We'll be making our server today in Node.js and using it to display some data that you input!

Servers communicate with each other with the HTTP (HyperText Transfer Protocol), which defines many kinds of different requests that clients can make to servers. 

We'll be using a Node.js package called Express, and that will make it much easier for us to create routes and serve different content to the client-side.

## Before we get started...
Go into the folder that contains this repository using the terminal (or open the folder with VSCode). Then, type the following line.
```
npm init
```
This will auto-generate a file called `package.json`, which will contain all information about the application, including a description, how to start it, and a list of all packages the application depends on. The command line will prompt you for some basic information, just hit enter on everything for now.  

## Code! 

### The Basics
A basic Express server will look like this:
```javascript
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});
```
The first few lines are just importing packages and setting everything up, and every Express server will have those lines (this type of code is sometimes called boilerplate). The last four lines are what we actually need to run our server. We specify the port number, then we call server.listen(), which takes the port number, and a callback function that lets us know on the command line that the server is on (more information about callbacks at Appendix A).

```javascript
// Returns the JSON of ice cream flavors along with its costs.
app.get('/getData', (req, res) => {
    res.json(iceCreams);
});

// Inserts a key-value pair from the ice cream flavor to that flavor's cost.
app.post('/insertData', (req, res) => {
    const params = req.body;
    iceCreams[params.flavor] = params.cost;
    res.redirect('/');
});
```
We're only using two types of HTTP requests: GET requests, usually used to retrieve content from a server, and POST requests, usually used to send data to a server. 

In the '/getData' endpoint, res.json is used to send a JSON object as a response.  
In the '/insertData' endpoint, the parameters (flavor and cost) are retreived and set as a key-value pair in the ice-cream object. Then, res.redirect is used to change the endpoint to the default '/' endpoint.

## TODOs:
Now, work on the '/changeprice' and '/recommendation' APIs. The description of these endpoints are found in the starter-code as a TODO comment. Try filling in the blanks yourself!

Once you have finished this, go into the 'public/index.html' file and below the end of the body tag, type in the following line:
```html
<script src="script.js"></script>
```

## CSS
CSS stands for Cascading Style Sheets. Each CSS document contains instructions for how to style different elements in a webpage. We select these elements with what are called "selectors", and we can set different properties for the selected elements.

A typical CSS document would look something like this: 
```css
/* these are selectors! */
h1 {
  font-family: Nunito, "sans-serif";
  background-color: #64bef1;
}

p {
  font-family: Roboto, "sans-serif"; 
}
```
Any HTML document that links to this CSS file will have `<h1>` and `<p>` tags with these attributes. 

### Different Ways of Styling
There are three main ways of styling an HTML document.
- Inline Styling (uses a style attribute in each element to specify)
- Internal Styling (uses the style tag in the head which outlines all the CSS properties)
- External Styling (uses a separate .css file to style the document)

**We will mainly be using external styling to style our document.**

### Selectors 
As shown before, one way of selecting elements is just by indicating the tag name. However, we can limit the elements which we use and specify any particular element in the DOM by describing where the element is in relation to others. A comprehensive list can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), though below are a few examples.

#### Class Selector
Selects elements of the given class. For example, `.hackschool` will select every element with the class attribute set to "hackschool". 

#### ID Selector
Selects elements of the given class. For example, `#navbar` will select every element with the id attribute set to "navbar".

#### Descendant Selector
Simply place the parent element before the child element you want to select. For example, `div img` will select all `<img>` tags inside any `<div>` tag.

#### Direct Descendant Selector
Denoted by a `>` symbol. For instance, `div > img` will only select `<img>` tags that are an immediate child of a `<div>` tag. 

## More TODOs
Mess around with the CSS styling and try to get the website to look like the solution code! This is your time to experiment with CSS to understand the different things we can do.

## You're done!
Congratulation! You have now made an awesome ice cream store using HTML, CSS, and Javascript. We hope you will want to learn more by coming out to the rest of our Hack School workshops!
