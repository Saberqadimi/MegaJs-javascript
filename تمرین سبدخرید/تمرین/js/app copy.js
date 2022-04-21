//
/**
 * ابتدا میایم دایو کلی اون محصول رو میگیریم 
 * بعدش فانکشن میسازیم اون دوره یا محصول رو اطلاعاتشو مثل قیمت و اسم و ای دی و 
 * عکس میگیریم و میریزیم داخل آبجکت
 * بعدش میایم یه فانکشن میسازیم اطلاعات اون محصول رو ببریم بریزیم تو سبد خرید
 */



//variaball
//create varibale for global course
const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCart = document.querySelector('#clear-cart')


// eventListeners
eventListeners()

function eventListeners() {

    courses.addEventListener('click', byCourse)
        //remove course in cart
    shoppingCartContent.addEventListener('click', removeCourse)
    clearCart.addEventListener('click', removeAll)

    // get data from localstorage on loaded
    document.addEventListener('DOMContentLoaded', showCoursesOnload)
}


//function
//add the course to the cart
function byCourse(e) {
    e.preventDefault()
        //use delegation for access to the course that selected
    if (e.target.classList.contains('add-to-cart')) {
        //access to the cart div with parentElement
        const course = e.target.parentElement.parentElement
            //read values
        getCourseInfo(course)
    }
}

//getting the course info that selected by user
function getCourseInfo(course) {
    //get info product in cart
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('span').textContent,
        id: course.querySelectorAll('a')[1].getAttribute('data-id')
    }
    addToCart(courseInfo)
}

//add To cart Course selected and show in list
function addToCart(cInfo) {
    //create li tag
    let row = document.createElement('tr')
    row.innerHTML = `
    <tr>
    <td>
    <img src="${cInfo.image}" width="85px">
    </td>
    <td>${cInfo.title}</td>
    <td>${cInfo.price}</td>
    <td>
      <a class="remove" data-id="${cInfo.id}" href="#">X</a>
    </td>
    </tr>    
    `
    shoppingCartContent.appendChild(row)
    saveToLocalStorage(cInfo)

}

//add to local storage
function saveToLocalStorage(course) {
    const courses = getFromStorage()
    courses.push(course)
    localStorage.setItem('courses', JSON.stringify(courses))
}

//get course from localstorage
function getFromStorage() {
    let courses;
    const getFromLs = localStorage.getItem('courses')
    if (getFromLs === null) {
        courses = []
    } else {
        courses = JSON.parse(getFromLs)
    }
    return courses
}

//remove one course in cart
function removeCourse(e) {
    //این دوتا متغییر برای ریمو از لوکال درست کردیم
    let course, courseId;
    //

    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove()
        course = e.target.parentElement.parentElement
        courseId = course.querySelector('a').getAttribute('data-id')

    }
    removeCourseLs(courseId)
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
//remove courses frome localstorage

function clearCartLs() {
    localStorage.clear()
}

function showCoursesOnload() {

    let coursesLs = getFromStorage()
    coursesLs.forEach(function(cInfo) {
        //create li tag
        let row = document.createElement('tr')
        row.innerHTML = `
    <tr>
    <td>
    <img src="${cInfo.image}" width="85px">
    </td>
    <td>${cInfo.title}</td>
    <td>${cInfo.price}</td>
    <td>
      <a class="remove" data-id="${cInfo.id}" href="#">X</a>
    </td>
    </tr>    
    `
        shoppingCartContent.appendChild(row)
    });

}





/////////// تمرین مجدد




















//
//