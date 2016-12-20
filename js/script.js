// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

var numberOfObjects = quotes.length;
var trackRandomArray = [];


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//every 30 seconds show new quote
setInterval( printQuote, 30000);

function print(message) {
var outputHTML = document.getElementById('quote-box');
outputHTML.innerHTML = message;

//set a random background color 
  var colors = ['red', 'blue', 'green', 'grey','pink,'];
  var randColor = colors[Math.floor(Math.random()*colors.length)];
document.body.style.backgroundColor = randColor;

}
function getRandomQuote(x){ //pass in random number
  //selects a random quote object from the quotes array
  //returns the randomly selected quote object
var randomQuote = quotes[x]

return randomQuote;
};

function getRandomNumber(){
/*
This function gets a random number.
The previous random numbers are traced in trackRandomArray once all numbers are used it resets this array to empty
*/

var randomNumber = Math.floor(Math.random() * (quotes.length)) ;

// Have we seen this number before? If so, get a new one
while (trackRandomArray.indexOf(randomNumber)!== -1 && quotes.length!==trackRandomArray.length) {
  var randomNumber = Math.floor(Math.random() * (quotes.length)) ;
}
if (quotes.length===trackRandomArray.length){
trackRandomArray = [];//set tracking array to empty
var randomNumber = Math.floor(Math.random() * (quotes.length)) ;
return randomNumber;

}else if (trackRandomArray.indexOf(randomNumber)=== -1) {
  //new number, add to tracking array
  var total = trackRandomArray.push(randomNumber);
  return randomNumber;

}else{

return randomNumber;

}
}

function printQuote(){

var randomNumber = getRandomNumber();
var quoteArray = getRandomQuote(randomNumber);



html="<p class='quote'>" + quoteArray.quote + "</p>";
html+="<p class='source'>" + quoteArray.source ;
if (typeof quoteArray.citation !== 'undefined') {
html+="<span class='citation'>" + quoteArray.citation + "</span>";
}
if (typeof quoteArray.year !== 'undefined') {
html+="<span class='year'>" + quoteArray.year + "</span>";
}
if (typeof quoteArray.tag !== 'undefined') {
html+="<span class='tag'>(" + quoteArray.tag + ")</span>";
}
html+=" </p>";


print(html);

};

//printQuote()
//trackRandom();
