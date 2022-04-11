//varibals
const courses = document.querySelector('#courses-list')
shoppingCartContent = document.querySelector('#cart-content tbody')
clearCart = document.querySelector('#clear-cart')
    // functions 
eventListeners()

function eventListeners() {
    courses.addEventListener('click', byCourse)
        //remove course
    shoppingCartContent.addEventListener('click', removeCourse)
        //clear all data in cart
    clearCart.addEventListener('click', removeAll)
        //load all course from localstorage and show in list
    document.addEventListener('DOMContentLoaded', showCoursesOnload)
}

//by course selected
function byCourse(e) {
    e.preventDefault()
    if (e.target.classList.contains('add-to-cart')) {
        const course = e.target.parentElement.parentElement

        getCourseInfo(course)
    }
}

function getCourseInfo(course) {
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('span').textContent,
        id: course.querySelectorAll('a')[1].getAttribute('data-id')
    }

    addToCart(courseInfo)
}


function addToCart(cInfo) {
    let row = document.createElement('tr')
    row.innerHTML = `
    <td>
    <img width="85px" href="#" src="${cInfo.image}">
    </td>
<td>
  ${cInfo.title}
</td>
<td>
${cInfo.price}
</td>

<td>
  <a class="remove" data-id="${cInfo.id}" href="#">
  X
  </a>
</td>
    
    `
    shoppingCartContent.appendChild(row)
    saveToLocalStorage(cInfo)

}

function saveToLocalStorage(course) {
    const courses = getFromStorage()
    courses.push(course)
    localStorage.setItem('courses', JSON.stringify(courses))
}


function getFromStorage() {
    let courses;
    const getFromLs = localStorage.getItem('courses')

    if (getFromLs) {
        courses = JSON.parse(getFromLs)
    } else {
        courses = []
    }
    return courses
}
// remove course selected 
function removeCourse(e) {
    e.preventDefault()
    let course, courseId;
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove()
        course = e.target.parentElement.parentElement
        courseId = course.querySelector('a').getAttribute('data-id')
    }
    removeCourseLS(courseId)
}

function removeCourseLS(id) {
    let coursesLS = getFromStorage()

    coursesLS.forEach(function(course, index) {
        if (course.id === id) {
            coursesLS.splice(index, 1)
        }
    });

    localStorage.setItem('courses', JSON.stringify(coursesLS))
}

//remove all course in cart
function removeAll() {
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.firstChild.remove()
    }
    clearCartLs()

}

function clearCartLs() {
    localStorage.clear()
}
//onload allcourse frome local storage
function showCoursesOnload() {
    const courses = getFromStorage()
    courses.forEach(function(cInfo) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>
        <img width="85px" href="#" src="${cInfo.image}">
        </td>
    <td>
      ${cInfo.title}
    </td>
    <td>
    ${cInfo.price}
    </td>
    
    <td>
      <a class="remove" data-id="${cInfo.id}" href="#">
      X
      </a>
    </td>
        
        `
        shoppingCartContent.appendChild(row)
    });
}



//