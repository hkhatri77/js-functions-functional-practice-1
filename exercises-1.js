//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback) {
        for (var i = 0; i < array.length; i++) {
            callback.call(i, array[i]);
        }
    }
    // tests
    // ---
var total = 1
forEach([1, 2, 3, 4], function(a) {
    total *= a;
})
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------
function reduce(arr, cb, defaultValue) {
    var a = defaultValue ? defaultValue : arr.shift()
    forEach(arr, function(v, i, arr) {
        a = cb(a, v, i, arr)
    })
    return a
}

console.assert(
    reduce([1, 2, 3, 4], function(a, v) {
        return a * v
    }) === 24
)

// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback) {
    var newArray = []
    forEach(array, function(v, i, array) {
        newArray.push(callback(v, i, array))
    })
    return newArray;
}

var squares = map([1, 2, 3, 4], function(v) {
    return v * v
})
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    var newArray = [];
    for (var i=0; ilen=array.length; i<ilen, i++){
        if (array[i] % 2 == 0)
            reduce(array, function(v, i, array){
                newArray.push(callback(v,i,array))
            })
        return newArray;
    }
}

//var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
//console.assert(evens[0] === 2)
//console.assert(evens[1] === 4)

// ----------------------------
// using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------

function sum(arr){
 var args = Array.prototype.slice.call(arguments)
    return args.reduce(function(a, v){
        return a+v
    }, 0)
}

// tests
// ---

console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)


// ----------------------------
// using Array.sort(), sort the following array
// of people by last name
// ----------------------------

var names = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"}
]

names.sort(function(a, b){
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});


// tests
// ---
console.assert(names[0].name === "Brian")
console.assert(names[1].name === "Jesse")
console.assert(names[2].name === "Matt")
