// Events Type
const clearCartBtn = document.querySelector('#clear-cart')

// mouse Events

// click 
// clearCartBtn.addEventListener('click', printEvent )

// doule click 
// clearCartBtn.addEventListener('dblclick', printEvent )

// mouse enter
// clearCartBtn.addEventListener('mouseenter', printEvent )

// mouse leave
// clearCartBtn.addEventListener('mouseleave', printEvent )

// mouse over
// clearCartBtn.addEventListener('mouseover', printEvent )

// mouse out
// clearCartBtn.addEventListener('mouseout', printEvent )

// mouse up
// clearCartBtn.addEventListener('mouseup', printEvent )

// mouse down
// clearCartBtn.addEventListener('mousedown', printEvent )

// mouse move
clearCartBtn.addEventListener('mousemove', printEvent )


function printEvent(e){
    console.log(e)
    console.log(`THE EVENT IS: ${e.type}`)
}