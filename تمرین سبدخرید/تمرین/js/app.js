//
//varibals
const courses = document.querySelector('#courses-list')
shoppingCartContent = document.querySelector('#cart-content tbody')
clearCart = document.querySelector('#clear-cart')

//
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


//
//1
function byCourse(e) {
    e.preventDefault()
    if (e.target.classList.contains('add-to-cart')) {

        const course = e.target.parentElement.parentElement
        getCourseInfo(course)

    }
}
//2
function getCourseInfo(course) {
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('span').textContent,
        id: course.querySelectorAll('a')[1].getAttribute('data-id')
    }
    addToCart(courseInfo)
}

//3
function addToCart(cInfo) {
    let row = document.createElement('tr')
    row.innerHTML = `
    <td>
    <img href="#" src="${cInfo.image}" width="85px">
    </td>
    <td>${cInfo.title}</td>
    <td>${cInfo.price}</td>
    <td>
    <a class="remove" href="#" data-id="${cInfo.id}">
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
    let course;
    const getFromLs = localStorage.getItem('courses')
    if (getFromLs) {
        course = JSON.parse(getFromLs)
    } else {
        course = []
    }
    return course
}

function showCoursesOnload() {
    const courses = getFromStorage()
    courses.forEach(function(cInfo) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>
        <img href="#" src="${cInfo.image}" width="85px">
        </td>
        <td>${cInfo.title}</td>
        <td>${cInfo.price}</td>
        <td>
        <a class="remove" href="#" data-id="${cInfo.id}">
        X
        </a>
        </td>
        
        `
        shoppingCartContent.appendChild(row)
    });
}

function removeCourse(e) {
    let course, courseId;
    e.preventDefault()
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

function removeAll(e) {
    while (shoppingCartContent.firstElementChild) {
        shoppingCartContent.firstElementChild.remove()
    }
    clearCartLs()

}

function clearCartLs() {
    localStorage.clear()
}



















//