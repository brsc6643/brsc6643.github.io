const quoteButton = document.querySelector('.new-quote');
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

quoteButton.addEventListener('click', getQuote);

window.addEventListener('load', getQuote);

async function getQuote() {
    console.log('getQuote working');
    let text = await fetch(endpoint)
    let response = await text.text();
    let json_response = JSON.parse(response);
    //let message = response['message'];
    console.log(json_response);
    console.log(json_response['message']);
    //.then(text => text.text())
    //.then(y -> myDisplay(y));
    //console.log(text['message']);

    displayQuote(json_response['message']);
}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    //console.log('displayQuote working');
    //const textMessage = document.createTextNode(x);
    //quoteBox.appendChild(textMessage);
    document.getElementById('js-quote-text').textContent = x;
}

//getQuote();
