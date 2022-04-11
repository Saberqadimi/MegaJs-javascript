//
/**
 * ابتدا میایم دایو کلی اون محصول رو میگیریم 
 * بعدش فانکشن میسازیم اون دوره یا محصول رو اطلاعاتشو مثل قیمت و اسم و ای دی و 
 * عکس میگیریم و میریزیم داخل آبجکت
 * بعدش میایم یه فانکشن میسازیم اطلاعات اون محصول رو ببریم بریزیم تو سبد خرید
 */



//variaball
//create varibale for global course
const courses = document.querySelector('#courses-list')
shoppingCartContent = document.querySelector('#cart-content tbody')
    // eventListeners

eventListeners()

function eventListeners() {

    courses.addEventListener('click', byCourse)

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
    let output = shoppingCartContent.appendChild(row)
    console.log(output)
    console.log(shoppingCartContent)
}
































//