/**
 * Simple basics: `class declaration`
 */
class RectangleDec {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};
/**
 * Simple basics: `class expression`
 */
const RectangleExp = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};
/**
 * Simple basics: `function declaration`
 */
function calcRectAreaDec(width, height) {
  return width * height;
};

/**
 * Simple basics: `function expression`
 */
var calcRectAreaExp = function(width, height) {
  return width * height;
};

/**
 * (1) Class
 * - A `Class` is like a `blueprint` - a description of the object to be created
 * - Classes inherit from classes and create `sub-class relationships`: heirarchical class taxonomies
 * - `class` technically does not exist in JavaScript. Constructor functions are used instead
 * - `class` keyword desugars to constructor function
 */

/**
 * (2) Prototype
 * - Whenever an object is created, JS engine adds `prototype` object to 
 *    its properties
 */

 /**
  * (3) IIFE - Immediately Invoked Function Expression
  * - `IIFE` is a function that runs as soon as it is defined
  * - Provides data privacy
  * - Any varaible declared within IIFE cannnot be accessed by the outside world
  */
(function() {
  var foo = "defined inside IIFE";
  console.log("foo is", foo); // logs: foo is defined inside IIFE
})()
try {
  console.log(foo); // logs: foo is undefined
} catch (e) { console.log("foo is undefined outside IIFE"); }

/**
 * (4) Closure
 * - `Closure` is the combination of a function and the lexical environment
 *    within which that function was declared
 * - This env consists of any local variables that were in-scope at the 
 *    time closure was created
 * - In the below case, `display` is a reference to the instance of 
 *    `displayName` created when `User()` is run
 * - The instance of `displayName` maintains a reference to its lexical
 *    env in which `name` exists
 * - So when `display` executes, `name` is available
 * - Inner function that has access to outer function's
 *    varaibles -- scope
 * - Inner function has access to 3 scopes:
 *    - Its own scope
 *    - Outer function's scope
 *    - Global scope
 */
const punctuation = `!`;
function User(name) {
  return function displayName(greeting) { // `displayName` for explaination puprose; can also be (greeting) => {
    console.log(`${greeting} ${name}${punctuation}`);
  }
};
const display = User('Bhavin');
display('Welcome');

/**
 * (5) Module pattern
 * - In JavaScript, `module` refers to a small independent, resuable code
 * - JavaScript modules can export object, HTML template or CSS stylesheet
 * - JavaScript does not have `private` keyword, but we can achieve private
 *    methods using `Closures`
 */

const sampleModule = function() {
  function _privateMethod() {
    console.log("I am private method");
  }

  return {
    publicMethod: function() {
      console.log("Accessing private method");
      _privateMethod();
    }
  }
}();
const moduleInstance = sampleModule;
moduleInstance.publicMethod();
// export default sampleModule;

/**
 * (6) Hoisting
 * - `Hoisting` is a JavaScript mechanism where variables and function
 *    declarations are moved to the top of their scope before code
 *    execution
 * - JavaScript only hoists declarations, not initializations
 */
console.log("hoisted", hoist);
var hoist = "I am hoisted";

/**
 * (7) Scope
 * - `Scope` is the accessibility of variables, functions and objects
 *    in some particular part of the code during runtime.
 * - In other words, `scope` determines the visibility of variables
 *    and other resources in areas of the code
 */
const globalGreeting = `Global Welcome!`; // Global scope
(function() {
  const localGreeting = `Local Welcome!`; // Local scope
  console.log("Global", globalGreeting);
  console.log("Local", localGreeting);
})();
try {
  console.log("Local", localGreeting);
} catch (e) { console.log("ERR: `localGreeting` is not defined as expected"); }

/**
 * (8) Currying
 * - `Currying` is a technique of evaluating a function with multiple arguments into a
 *    sequence of functions with single argument
 * - In other words, when a function, instead of taking all the arguments at once, takes
 *    the 1st argument and returns a 2nd function that takes the 2nd argument and
 *    returns a 3rd function that takes the 3rd argument and so on until all the arguments
 *    have been exhausted
 * - Useful to create higher-order functions
 */
const curryAdd = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    }
  }
};
console.log("Currying add", curryAdd(1)(2)(3));
/** Currier Utility that can transform any given function into a curried version of itself*/
const currier = function(fn) {
  const args = Array.prototype.slice.call(arguments, 1);
  return function() {
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
  }
};
const sequence = function(start, end, random) {
  const result = [];
  result.push(random);
  for(let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const seq = currier(sequence, 1, 5);
console.log("currier utility", seq(10)); // logs: currier utility [ 10, 1, 2, 3, 4, 5 ]

/**
 * (9) Memoization
 * - `Memoization` is a programming technique which attempts to increase a function's
 *    performance by caching its previously computed results
 * - Each time a `memoized` function is called, its parameters are used to index the cache
 * - If the data is cached, then it returns without executing the entire function. If not,
 *    then function is executed and the result is added to cache
 */
const memoized = function() {
  const cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Getting from cache", cache[value]);
    } else {
      const result = value + 10;
      cache[value] = result;
      console.log("Calculating", result);
    }
  }
}
const memoizedAdd = memoized();
memoizedAdd(4); // logs: Calculating 14
memoizedAdd(4); // logs: Getting from cache 14

/**
 * (10) Callback Function
 * - `Callback function` is a reference to an executable code or a piece of executable 
 *    code which is passed as an argument to other code
 */
function greeting(name) {
  console.log(`Welcome ${name}!`);
}
function executeCallBackFunc(fn) {
  return (name) => {
    fn(name);
  }
};
const cbTest = executeCallBackFunc(greeting);
cbTest('Bhavin');

/**
 * (11) Apply, Call & Bind methods
 * - When multiple objects have different properties, we can write a common method and 
 *    use properties using call/bind/apply methods
 */
const obj = {
  num: 1
};
const arr = [2, 3, 4];
function add(a, b, c) {
  console.log(this.num + a + b + c);
};
add.apply(obj, arr); // binds `obj` to `add`; arguments will be an array
add.call(obj, ...arr); // similar to apply, but arguments cannot be an array
const bound = add.bind(obj); // returns method instance instead of value
bound(...arr); // binded instance needs to be executed

/**
 * (12) Polymorphism
 */
function Person(age,weight){
  this.age = age;
  this.weight = weight;
}
Person.prototype.getInfo = function(){
  return "I am " + this.age + " years old " +
    "and weighs " + this.weight +" kilo.";
};
function Employee(age,weight,salary){
  this.age = age;
  this.weight = weight;
  this.salary = salary;
}
Employee.prototype = new Person();
Employee.prototype.getInfo = function(){
  return Person.prototype.getInfo.call(this) +
     "and earns " + this.salary + " dollar.";  
};
var person = new Person(50,90);
var employee = new Employee(43,80,50000);

console.log(person.getInfo());
console.log(employee.getInfo());

/**
 * (13) Asynchronous
 * - <script src='index.js'></script> - will wait & execute for index.js and then parse HTML
 * - <script async src='index.js'></script> - will execute index.js when loaded and continue parsing HTML
 * - <script defer src='index.js'></script> - will execute index.js at last after parsing HTML
 */

/**
 * (14) Promises
 * - The `Promise` object represents the eventual completion (or failure) of an 
 *    asynchronous operation, and its resulting value
 */
const promise = new Promise((res, rej) => {
  if(true) {
    res();
  } else {
    rej();
  }
})

/**
 * (15) Async / Await
 * - `Async & Await` are basically just syntactic sugar on top of `Promises`
 */