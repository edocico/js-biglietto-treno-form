console.log('hello world!')
alert('Completa il form per ottenere il tuo biglietto')

// recupero elementi del DOM
const btnSendDOMElement = document.getElementById('send-btn')

const btnReturnDOMElement = document.getElementById('return-btn')


const usernameDOMElement = document.getElementById('username')
console.dir(usernameDOMElement)
    
const nKmDOMElement = document.getElementById('travelkm')
console.dir(nKmDOMElement)
    
const userAgeDOMElement = document.getElementById('discount')
console.dir(userAgeDOMElement)

const passNameDOMElement = document.getElementById('passenger-name')

const trainNumberDOMElement = document.getElementById('train-number')

const ticketPriceDOMElement = document.getElementById('ticket-price')

const ticketDOMElement = document.querySelector('.ticket-section')



// dichiaro variabili con global scope
let price
   
//event listener bottone invia
btnSendDOMElement.addEventListener('click', function (){
    // recupero valori elementi del DOM
    const userName = usernameDOMElement.value
    console.log(userName)
    console.log(typeof userName)
    const nKm = parseFloat(nKmDOMElement.value)
    console.log(nKm)
    const userAge = parseInt(userAgeDOMElement.value)
    console.log(userAge)
    // calcolo il prezzo di base
    price = nKm * 0.21
    console.log(price)

    if (userAge === 0) {
        price = price - ((price * 20) / 100)
    } else if (userAge === 2) {
        price = price - ((price * 40) / 100)
    } 

    console.log(price)

    //stampo sul biglietto il nome del passseggero
    passNameDOMElement.innerHTML = userName
    //genero un numero casuale da 1 a 10 e lo stampo sul biglietto nel numero della carrozza
    const genNumber = Math.floor((Math.random() * 10) + 1)
    trainNumberDOMElement.innerHTML = genNumber.toString()
    //stampo sul biglietto il costo in euro
    ticketPriceDOMElement.innerHTML = price.toFixed(2) + ' ' + '&euro;'
    // faccio apparire la ticket-section
    ticketDOMElement.classList.remove('display-n')
    ticketDOMElement.classList.add('display-b')

})

// event listener bottone annulla (clear input text)
btnReturnDOMElement.addEventListener('click' , function () {
    document.getElementById('username').value = ""
    document.getElementById('travelkm').value = ""
})