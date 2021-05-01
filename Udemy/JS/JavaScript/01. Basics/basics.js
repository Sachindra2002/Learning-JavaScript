
//Single line Comment

/*  Multi Line Comment
    Code Goes Here
    Code Goes Here
    Text Here
*/

//console.log("hello world")

//05. Variables


var x = 10;
var y = 20;
var a = x * y;
console.log(a);

//06. Let

let carName;
carName = "Porche";
console.log(carName);

//07. Const

const car = {type:"Porche", model:"911 Turbo", colour:"White"};
car.colour="Red";
console.log(car);

//08. Operators

var x = 5;
var y = 2;
var z = x - y;

console.log(z);

//09. Arithmetic

/*

+   Addition
-   Substraction
*   Multiplication
**  Exponentiation
/   Division
%   Modulus
++  Increment
--  decrement

*/

//10. Assignment

/*

=       x = y
+=      x += y
-=      x -= y
*=      x *= y
/=      x /= y

*/

//11. Data Types

typeof "Porsche" // Returns String
typeof 3.14     // Returns Number
typeof true     // Returns Boolean
typeof false    // Returns Boolean
//type x          // Returns Undefined

//12. Functions

function sample (a1, a2){
    return a1*a2;
}
console.log(sample);

//13. Objects

var car1 = {
    make: "Porsche",
    model: "911 Turbo",
    Year: "2022",
    Colour: "Blue"
}

console.log(car1);
console.log(car1.make);
console.log(car1.model);
console.log(car1.Year);
console.log(car1.Colour);

//14. Strings

var q = "Porsche";
var sln = q.length;
var w = 'Ford';
var e = w.length;
console.log(e);
console.log(sln);

//15. String Methods

var str = "This is some text to show you how to find a string in a string";
var pos = str.indexOf("some");
var slc = str.slice(1, 5);
console.log(pos);
console.log(slc);

//16. Numbers

var a = 3.14;
var b = 3;
var c = 20;
var d = 40;
var e = d-c;

console.log(e);

//17 Number Methods

var x = 123;
x.toString();
(123).toString();
(100+23).toString();
console.log(x);

var y = 3.1475;
y.toFixed(0);
y.toFixed(2);
y.toFixed(4);
y.toFixed(6);

console.log(y);


var person = {
    name:"Maria Jones"
};

console.log(JSON.stringify(person));




