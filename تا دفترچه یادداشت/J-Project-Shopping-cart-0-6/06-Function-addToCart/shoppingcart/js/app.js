// variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody')
      

// eventListeners
eventListeners()
function eventListeners(){
    courses.addEventListener('click', buyCourse)
}


// functions

// add the course to the cart
function buyCourse(e){
    e.preventDefault()
    // use delegation for access to the course that selected
    if(e.target.classList.contains('add-to-cart')){
        // access to the card div with parentElement
        const course = e.target.parentElement.parentElement

        // read values
        getCourseInfo(course)
    }
}

// getting the course info that selected by user
function getCourseInfo(course){
    // course info
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('span').textContent,
        id: course.querySelectorAll('a')[1].getAttribute('data-id')
    }
    
    // adding the course to the cart 
    addToCart(courseInfo)
}

// adding the course to the cart 
function addToCart(cInfo){
    // create <li> tag
    let row = document.createElement('tr')

    // Build HTML Template
    row.innerHTML = `
        <tr>
            <td>
                <img src = "${cInfo.image}" width = "100px">
            </td>
            <td>${cInfo.title}</td>
            <td>${cInfo.price}</td>
            <td>
                <a class = "remove" href = "#" data-id ="${cInfo.id}">X</a>
            </td>
        </tr>
    `

    shoppingCartContent.appendChild(row)
    
}
