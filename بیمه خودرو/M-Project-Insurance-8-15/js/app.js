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

        //check the value of fields for correct
        if (car === '' || year === '' || level === '') {
            html.displayError('لطفا همه مقادیر به درستی واردشود')
        } else {

            const insurance = new Insurance(car, year, level)
            const price = insurance.calculatePrice()
        }

    })

}

//object

// every thing related in html
function HTMLUI() {}
//this function for create years for tag select year
HTMLUI.prototype.displayYears = function() {

    let
        persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
        fixNumbers = function(str) {
            if (typeof str === 'string') {
                for (var i = 0; i < 10; i++) {
                    str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                }
            }
            return str;
        };


    //get max year
    const now = new Date().toLocaleDateString('fa-IR')
    let nowYear = now.slice(0, 4)
    max = fixNumbers(nowYear)


    //get min years
    min = max - 20

    //access to the select tag
    const selectYear = document.querySelector('#year')


    //create for loop for making option tag
    for (let i = max; i >= min; i--) {
        //create tag option
        const option = document.createElement('option')
        option.value = i
        option.innerText = i
            //append option to the selectYear
        selectYear.appendChild(option)

    }
}


//this function for show error display in form 

HTMLUI.prototype.displayError = function(err) {
        const div = document.createElement('div')
        div.classList = 'error'
        div.appendChild(document.createTextNode(err))

        //show and put error in the form befor first form-group 
        form.insertBefore(div, document.querySelector('.form-group'))

        //remove error after 3 seconds
        setTimeout(() => {
            document.querySelector('.error').remove()
        }, 3000);
    }
    //every thing related in insurance
function Insurance(car, year, level) {
    this.car = car
    this.year = year
    this.level = level

}

//calculate price for model car %price sub
Insurance.prototype.calculatePrice = function(info) {
    let price;
    let base = 2000000
        //get the car value
    const car = info.car
        /*
car:1 ==> pride   1.15
car:2 ==> optima   1.30
car:3 ==> porche   1.80
*/

    switch (car) {
        case '1':
            price = base * 1.15
            break;

        case '2':
            price = base * 1.30
            break;

        case '3':
            price = base * 1.80
            break;
    }
    console.log(price)
    return price;




}





















//