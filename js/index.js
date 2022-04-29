// for the quote preferences
var quoteAPI = 'https://type.fit/api/quotes';

// Step 1 Using Quote API Server
function getQuote(){
fetch(quoteAPI)
.then(res => res.json()) 

// Step 2 Randomize JSON Data
.then(data => JSON.stringify(data[Math.floor(Math.random(data)  * data.length)]))

// Step 3 Showing the Randomized JSON Data inside the console 
.then(data2 => displayQuote(`"${JSON.parse(data2).text}" 
-${JSON.parse(data2).author}`));
}

// Step 4 Next button refreshes the page
function displayQuote(quote){
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

// Step 5 Clicking the button refreshes the page
var newQuoteButton = document.querySelector('.new-quote');
// 5.1 Adding eventListener
newQuoteButton.addEventListener('click', getQuote);
getQuote();

// Copy quote button with pop-up using toast
document.getElementById('copy-text-btn').onclick = function (){
    navigator.clipboard.writeText(document.querySelector('.quote-text').innerText)
    .then(function(){
        // console.log('Text Copied!') 
        let toast = document.querySelector('.toast')
        toast = new bootstrap.Toast(toast)
        toast.show();
    });
}