
var name = "Alex";
var names = ["Alex", "Maria", "Sam", "Peter"];
console.log(names);

console.log(names[2]);
console.log(names.length);

for (var n of names) {
    console.log("x");
}

for (var n of names){
    console.log(n);
}

names.forEach(function(n, index){
    console.log(index + " - " + n);
});