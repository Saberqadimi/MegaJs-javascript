// Variable Scope

// Global Scope

//کلمه کلیدی var فقط در فانکشن مربوطش محدود میشه
//در بلاک ها محدود نمیشه و مقدار دهی میشه
//ولی کانست با لت جفتشون فقط در بلاک مربوطه محدود میشن
// Function Scope
function test() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Function Scope: ' + a + b + c)
}
test()

// Block Scope
function test() {

    if (true) {
        if (true) {
            var a = 'AA';
            let b = 'BB';
            const c = 'CC';
        }
        console.log('Block Scope: ' + a)
    }
}


console.log('Global Scope: ' + a)