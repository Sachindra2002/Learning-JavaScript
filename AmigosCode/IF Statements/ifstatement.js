var person = {
    name: "Anna",
    age: 18
}
var bool = false;

if (person.age >= 18) {
    console.log(person.name + " is an adult");
} else if (person.age == 17) {
    console.log(person.name + " is about to be an adult");
} else {
    console.log(person.name + " is not an adult");
}

switch (true) {
    case (person.age == 17):
        console.log(person.name + " is about to be an adult");
        break;
    case (person.age >= 18):
        console.log(person.name + " is an adult");
        break;
    default:
        console.log(person.name + " is not an adult");
        break;

}

switch (new Date().getDay()) {
    case 28:
        console.log("Wednesday");
        break;
    default:
        console.log("Don't Know");
        break;
}

