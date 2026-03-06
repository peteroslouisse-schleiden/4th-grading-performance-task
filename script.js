const quotes = [
"Believe you can and you're halfway there.",
"Success is not final, failure is not fatal.",
"Do something today that your future self will thank you for.",
"Dream big and dare to fail.",
"Stay positive, work hard, make it happen."
];

function newQuote(){

let random = Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerText = quotes[random];

}
