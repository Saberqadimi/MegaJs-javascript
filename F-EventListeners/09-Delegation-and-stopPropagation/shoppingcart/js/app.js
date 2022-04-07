//تمرین خودم
// Stop propagation

const card = document.querySelector('.card')
card.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()

    console.log('you are the clicked in card')
})

const infoCard = document.querySelector('.info-card')
infoCard.addEventListener('click', function(e) {
    console.log('you are the clicked in infocard')
    e.stopPropagation()

})

const addToCard = document.querySelector('.add-to-cart')
addToCard.addEventListener('click', function(e) {
    console.log('you are the clicked in adToCard')
    e.stopPropagation()

})

//تمرین خودم
// Delegation

const coursesList = document.querySelector('#courses-list')
coursesList.addEventListener('click', function(e) {
    // e.preventDefault()
    if (e.target.classList.contains('add-to-cart')) {
        console.log(e.target)
    }
})










// Delegation

// const coursesList = document.querySelector('#courses-list');
// coursesList.addEventListener('click', function(e) {
//     if (e.target.classList.contains('add-to-cart')) {
//         console.log(e.target)
//     }
// })

// Stop propagation


// const card = document.querySelector('.card')
// const infoCard = document.querySelector('.info-card')
// const addToCart = document.querySelector('.add-to-cart')


// card.addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('you Click the card')
// })

// infoCard.addEventListener('click', function(e){
//     console.log('you Click the infoCard')
//     e.stopPropagation()

// })

// addToCart.addEventListener('click', function(e){
//     console.log('you Click the addToCart')
//     e.stopPropagation()

// })