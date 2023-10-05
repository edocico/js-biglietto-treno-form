console.log('hello world!')
alert('completa il form per ottenere il costo del tuo biglietto')

const btnSendDOMElement = document.getElementById('send-btn')
//# calcolo del prezzo del biglietto del treno
//## raccolgo i dati nome e cognome dell'utente in una variabile tramite l'input nel DOM
    //- seleziono elemento tramite id
const usernameDOMElement = document.getElementById('username')
console.dir(usernameDOMElement)
    //- recupero il valore dell'input in una variabile

//## raccolgo il dato km da percorrere in una variabile tramite l'input nel DOM
    //- seleziono elemento tramite id
const nKmDOMElement = document.getElementById('travelkm')
console.dir(nKmDOMElement)
    //- recupero il valore dell'input in una variabile

//## raccolgo il dato età utente in una variabile tramite la selection nel DOM
    //- seleziono elemento tramite id
const userAgeDOMElement = document.getElementById('discount')
console.dir(userAgeDOMElement)
    //- recupero il valore dell'input in una variabile

//## ascolto evento click sul bottone invia

btnSendDOMElement.addEventListener('click', function (){

    const userName = usernameDOMElement.value
    console.log(userName)
    const nKm = parseFloat(nKmDOMElement.value)
    console.log(nKm)
    const userAge = parseInt(userAgeDOMElement.value)
    console.log(userAge)

    let price = nKm * 0.21
    console.log(price)

    if (userAge === 0) {
        price = price - ((price * 20) / 100)
    } else if (userAge === 2) {
        price = price - ((price * 40) / 100)
    } 

    console.log(price)

})