
/******************** JS STUFF **************************/


console.log(2 + '2') // 22   plus sign will concat
console.log(2 - '2') // 0   minus sign is only a number operator

let nums = [1,2,2,3]  // how to remove the duplicates?
// use a set
[...new Set(nums)]


// change this so that 'var' has block scope and not fuction scope
let func = function() {
  {
    let l = 'let';
    var v = 'var'
  }
  console.log(v) // var
  console.log(l) // l is not defined 
}
// A. Use an IIFE - Imediately invoked function expression
let func = function() {
  {
    (function() {
      let l = 'let';
      var v = 'var'
    })();
  }
  console.log(v) // v is not defined
  console.log(l) // l is not defined 
}
func()

/********* what will these print? *******/

console.log(5 < 6 < 7); // true
// this evals to
console.log(true < 7); // true
// this evals to
console.log(1 < 7) // true

console.log(5 < 6 < 7); // true
// this evals to
console.log(true > 5); // false
// this evals to
console.log(1 > 5) // false

/*********  *******/

let a = function() { return arguments }
console.log(a('hi')) // arguments object containing "hi"

let b = () => arguments

console.log(b("hi")) // does not work, 'agruments' dont bind to arrow func

// instead do this
let c = (...n) => { return n }
console.log(c("hi")) //[ "hi'"]


/*****************************************/

let x = function() {
  return 
  {
    message: 'hi'
  }
}
console.log(x()) // undefined   .. because of line break

/*****************************************/

// how to prevent someone from adding additional properties?
let profile = {
  name: 'joe'

}
// A. use Object.freeze(profile) - cannot modify object
Object.freeze(profile)
profile.age = 3 // will not change

// B. use Object.seal(profile)
// lets you change properties but not add or remove
Object.seal(profile)
profile.name = 'some other name' // this is valid


// Q. Allow name to be modified but not age
let profile = {
  name: 'joe'
}

Object.defineProperty(profile, 'age', {
  value: 3,
  writable: false
})

/*****************************************/

// Math.max(3) will start with the lowes value -infinity and compares to 3

console.log(Math.max()) // -infinity

/******** IIFE **********/

// can be written like 


(function(i){ }(i) )
(function(i){ } )(i)
!function(){ }();
~function(){ }();
-function(){ }();
+function(){ }();

/*
minify
creates closure around a variable 
https://www.youtube.com/watch?v=eY7u388cvM4
see @ 8:04

*/












