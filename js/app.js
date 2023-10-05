console.log('hello world!')
alert('completa il form per ottenere il costo del tuo biglietto')

const btnSendDOMElement = document.getElementById('send-btn')

const btnReturnDOMElement = document.getElementById('return-btn')


const usernameDOMElement = document.getElementById('username')
console.dir(usernameDOMElement)
    
const nKmDOMElement = document.getElementById('travelkm')
console.dir(nKmDOMElement)
    
const userAgeDOMElement = document.getElementById('discount')
console.dir(userAgeDOMElement)
   

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

btnReturnDOMElement.addEventListener('click' , function () {
    alert('ricarica la pagina e ricomicia')
})