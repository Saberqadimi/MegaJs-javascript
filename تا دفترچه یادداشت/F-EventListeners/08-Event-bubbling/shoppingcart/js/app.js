// Event Bubbling

const card = document.querySelector('.card')
const infoCard = document.querySelector('.info-card')
const addToCart = document.querySelector('.add-to-cart')

card.addEventListener('click', function(){
    console.log('you Click the card')
})

infoCard.addEventListener('click', function(){
    console.log('you Click the infoCard')
})

addToCart.addEventListener('click', function(){
    console.log('you Click the addToCart')
})