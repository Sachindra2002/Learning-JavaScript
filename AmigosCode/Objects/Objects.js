
var person = {
    name: "Maria Jones",
    age: 21,
    hasDriverLicense: true,
    dateOfBirth: "01/01/2000",
    address: {
        firstLine: "123",
        postCode: "11500",
        country: "Sri Lanka"
    }
};

console.log(JSON.stringify(person));
console.log(person.name);
console.log(person.age);
console.log(person.hasDriverLicense);

console.log(Object.values(person));
console.log(JSON.stringify(person.address));