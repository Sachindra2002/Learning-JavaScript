function addNumbers(n1, n2) {
    var result = ((n1 + n2) / 2);
    return result;
}

var result = addNumbers(3, 5);
var result2 = addNumbers(10, 20);

console.log(result);
console.log(result2);


// More Functions

var person = {
    name: "Anna",
    age: 20
};

console.log(Object.keys(person));
console.log(Object.values(person));