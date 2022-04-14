//Refactor filterOutOdds from ES5 code to ES2015 code

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

let nums = [1, 3, 4, 5, 7, 8, 22];
function filterOdds() {
    return nums.filter((val) => val % 2 === 0)
}


//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

function findMin() {
    return nums.reduce((min, val) => {
        return val < min ? val : min;
    })
}


//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const firstObj = {a:1, b:2};
const secondObj = {c:3, d:4};

function mergObjects() {
    return {...firstObj, ...secondObj};
}


//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
     return [...arr, ...args.map(v => v *2)]
}


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}


/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}


/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}