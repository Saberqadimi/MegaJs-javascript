//varibales

const html = new HTMLUI()
const form = document.querySelector('#request-quote')




//eventListeners
eventListeners()

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {

        html.displayYears();
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        //read value from the form submit
        const car = document.getElementById('make').value
        const year = document.getElementById('year').value
        const level = document.querySelector('input[name="level"]:checked').value
            // console.log(level)

        //check the valeu of fields for correct
        if (car === '' || year === '' || level === '') {
            html.displayError('لطفا همه مقادیر به درستی واردشود')
        } else {
            let resultDiv = document.querySelector('#result div')
            if (resultDiv !== null) {
                resultDiv.remove()
            }

            const insurance = new Insurance(car, year, level)
            const price = insurance.calculatePrice(insurance)

            html.showResult(price, insurance)
        }

    })

}

// //object
// //every thing related in insurance
// function Insurance(car, year, level) {
//     this.car = car
//     this.year = year
//     this.level = level

// }

// Insurance.prototype.calculatePrice = function(info) {
//     let price;
//     let base = 2000000
//         //get the car value
//     const car = info.car
//         /*
// car:1 ==> pride   1.15
// car:2 ==> optima   1.30
// car:3 ==> porche   1.80
// */

//     switch (car) {
//         case '1':
//             price = base * 1.15
//             break;

//         case '2':
//             price = base * 1.30
//             break;

//         case '3':
//             price = base * 1.80
//             break;
//     }
//     // console.log(price)
//     // return price

//     //get the year for diffrence

//     const year = info.year
//     const diffrence = this.getYearDiffrence(year)

//     //3% cheaper for each year

//     price = price - (((diffrence * 3) / 100) * price)

//     //get the value level
//     const level = info.level
//     price = this.calculateLevel(level, price)
//         // console.log(price)
//     return price
// }

// //تفاوت تعداد سال وارد شدهتا اخرین سال
// Insurance.prototype.getYearDiffrence = function(year) {

//         let
//             persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
//             arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
//             fixNumbers = function(str) {
//                 if (typeof str === 'string') {
//                     for (var i = 0; i < 10; i++) {
//                         str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
//                     }
//                 }
//                 return str;
//             };


//         //get max year
//         const now = new Date().toLocaleDateString('fa-IR')
//         let nowYear = now.slice(0, 4)
//         max = fixNumbers(nowYear)
//         year = max - year
//             // console.log(year)
//         return year;
//     }
//     //بدست اوردن قیمت بر اساس نوع بیمه level

// Insurance.prototype.calculateLevel = function(level, price) {
//     /*
// if level basic===> price *1.30
// if level complete==>price * 1.50
// */
//     if (level == 'basic') {
//         price = price * 1.30
//     } else {
//         price = price * 1.50
//     }
//     return price

// }








// // every thing related in html
// function HTMLUI() {}
// //this function for create years for tag select year
// HTMLUI.prototype.displayYears = function() {

//     let
//         persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
//         arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
//         fixNumbers = function(str) {
//             if (typeof str === 'string') {
//                 for (var i = 0; i < 10; i++) {
//                     str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
//                 }
//             }
//             return str;
//         };


//     //get max year
//     const now = new Date().toLocaleDateString('fa-IR')
//     let nowYear = now.slice(0, 4)
//     max = fixNumbers(nowYear)


//     //get min years
//     min = max - 20

//     //access to the select tag
//     const selectYear = document.querySelector('#year')


//     //create for loop for making option tag
//     for (let i = max; i >= min; i--) {
//         //create tag option
//         const option = document.createElement('option')
//         option.value = i
//         option.innerText = i
//             //append option to the selectYear
//         selectYear.appendChild(option)

//     }
// }


// //this function for show error display in form

// HTMLUI.prototype.displayError = function(err) {
//     const div = document.createElement('div')
//     div.classList = 'error'
//     div.appendChild(document.createTextNode(err))

//     //show and put error in the form befor first form-group
//     form.insertBefore(div, document.querySelector('.form-group'))

//     //remove error after 3 seconds
//     setTimeout(() => {
//         document.querySelector('.error').remove()
//     }, 3000);
// }

// //show the result of value and price in html view
// HTMLUI.prototype.showResult = function(price, insurance) {

//     let car = insurance.car
//         /*
// car:1 ==> pride
// car:2 ==> optima
// car:3 ==> porche
// */

//     switch (car) {
//         case '1':
//             car = 'پراید'
//             break;

//         case '2':
//             car = 'اوپتیما'
//             break;

//         case '3':
//             car = 'پورشه'
//             break;
//     }

//     //get the selecet level submit
//     let level = insurance.level
//     if (level == 'basic') {
//         level = 'ساده'
//     } else {
//         level = 'کامل'
//     }
//     //access to the div result
//     const result = document.querySelector('#result')
//         //createthe div tag for show in result
//     const div = document.createElement('div')
//     div.innerHTML = `
//     <p class="header">خلاصه فاکتور</p>
//    <p>مدل ماشین:${car}</p>
//    <p>سال ساخت:${insurance.year}</p>
//    <p>نوع بیمه:${level}</p>
//     <p class="total">قیمت نهایی:${price}</p>

//     `

//     const spinner = document.querySelector('#loading img')
//     spinner.style.display = 'block'
//     setTimeout(() => {
//         //hidden spinner after 3 seconds
//         spinner.style.display = 'none'
//             //append div to in result
//         result.appendChild(div)

//     }, 1500);

// }



















//
//