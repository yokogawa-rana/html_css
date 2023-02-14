const data = [{ name : "sanjay", age: 10 }, { name : "hardeep", age: 10 }, { name : "hardeep", age: 10 }];

let counter = { };

data.forEach( function(value){
    // console.log("value", value)
    // console.log("index", index)
    var key = JSON.stringify(value.name)
    counter[key] = (counter[key] || 0) + 1
})

// console.log(counter);
const users = Object.keys(counter);
console.log(users);

