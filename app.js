// Use Streams API for interacting with a USER ==========
// set up a user stream

var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);
var guestQuotesArr = require('./guestQuotes.js');



function randomMessage(){
	var guestNumber = Math.floor(Math.random() * 4000);
	//console.log("reaaaa", rideName, itemName);
	var quote = guestQuotesArr[Math.floor(Math.random()*guestQuotesArr.length)];
	return quote + " - Guest " + guestNumber;
}


Twitter.post('statuses/update', { status: randomMessage() }, function(err, data, response) {
  //console.log(data)
})