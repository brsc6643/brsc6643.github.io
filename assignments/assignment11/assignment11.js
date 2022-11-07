const quoteButton = document.querySelector('.btn-group');
const endpoint = 'http://quotes.stormconsultancy.co.uk/random.json';

quoteButton.addEventListener('click', getQuote);

window.addEventListener('load', getQuote);

async function getQuote() {
    console.log('getQuote working');
    let text = await fetch(endpoint)
    let response = await text.text();
    let json_response = JSON.parse(response);
    //let message = response['message'];
    console.log(json_response);
    console.log(json_response['quote']);
    //.then(text => text.text())
    //.then(y -> myDisplay(y));
    //console.log(text['message']);

    displayQuote(json_response['quote']);
}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    console.log('displayQuote working');
    //const textMessage = document.createTextNode(x);
    //quoteBox.appendChild(textMessage);
    document.getElementById('js-quote-text').textContent = x;
}

//getQuote();

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}