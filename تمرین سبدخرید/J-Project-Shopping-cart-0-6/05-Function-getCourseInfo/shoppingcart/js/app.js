// variables
const courses = document.querySelector('#courses-list')


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
function addToCart(courseInfo){
    
}
