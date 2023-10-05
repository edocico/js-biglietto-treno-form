console.log('hello world!')
alert('completa il form per ottenere il costo del tuo biglietto')

// recupero elementi del DOM
const btnSendDOMElement = document.getElementById('send-btn')

const btnReturnDOMElement = document.getElementById('return-btn')


const usernameDOMElement = document.getElementById('username')
console.dir(usernameDOMElement)
    
const nKmDOMElement = document.getElementById('travelkm')
console.dir(nKmDOMElement)
    
const userAgeDOMElement = document.getElementById('discount')
console.dir(userAgeDOMElement)

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

    price = nKm * 0.21
    console.log(price)

    if (userAge === 0) {
        price = price - ((price * 20) / 100)
    } else if (userAge === 2) {
        price = price - ((price * 40) / 100)
    } 

    console.log(price)

})

// event listener bottone annulla
btnReturnDOMElement.addEventListener('click' , function () {
    alert('ricarica la pagina e ricomicia')
})