
var persons = [
    { name: "Alex", age: 22 },
    { name: "Peter", age: 19 }
];

for (var i = 0; i <= persons.length; i++) {
    console.log(persons[i].name);
    console.log(persons[i].age);
    console.log("-----------------");
}

var number = 0;

while (number < 5) {
    number += 1;
    if (number < 5) {
        continue;
    }
    console.log(number);
}

var i = 0;

do {
    i++;
    console.log(i);
} while (i < 5);