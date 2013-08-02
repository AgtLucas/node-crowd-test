var CAMPAIGN_GOAL = 1000;

// Start Express app
var express = require('express');
var app = express();

// Serve static files
app.use("/static", express.static(__dirname + '/static'));
// Parse POST requests
app.use(express.bodyParser());
app.listen(1337);
console.log("App running on http://localhost:1337");

// Serve homepage
app.get("/", function(request, response) {

  response.send(
    "<link rel='stylesheet' type='text/css' href='/static/style.css'>"+
    "<h1>Your Crowdfunding Campaign</h1>"+
    "<h2>raised ??? out of $"+CAMPAIGN_GOAL.toFixed(2)+"</h2>"+
    "<a href='/fund'>Fund This</a>"
  );
});

// Serve funding page
app.get("/fund", function(request, response) {
  response.sendfile("fund.html");
});

var BALANCED_MARKETPLACE_URI = "/v1/marketplaces/TEST-MP2qKZ0cYRFEoDVHxCIuLOEf"