var x = 20;
var y = 10;
var a = "5";
var m = "Mohammad";
var d = 18.4696;
var u = 123456.8963;
var z;

// arthimetic
z = x + y; //* plus - concat
z = x * y;
z = x - y;
z = x / y;
z = x % y;

// string number
z = x + a;
z = x - a;
z = x * a;
z = x / a;

// string
z = x + m; // concat
z = x - m; // Not a Number
z = x * m; // Not a Number
z = x / m; // Not a Number

// infinity
z = x / 0;
z = -x / 0;

// Numbers Method

// toString()
z = x.toString();
//  tofixed()
z = d.toFixed();
// toPrecesion()
z = u.toPrecision();
// Number()
z = Number(m);
console.log(typeof z);