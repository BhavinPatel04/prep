/**
 * Prototypal inheritance
 * - All functions are objects and they have a property `prototype`
 *    which is also an object
 * - JavaScript uses inheritance model called `Differential Inheritance`
 *   Meaning: Methods are not copied from parent -> child, but children
 *            have an "invisible link" back to their parent object
 *            (check below for example)
 *   "invisible link": Children have access to methods on parent.prototype 
 *                    because they are instances of parent. 
 *                    It is referred to as `prototypal chain`
 */
 /**
  * - `constructors` and regular functions are same.
  * - they are used to construct a new object
  * - Naming Convention: `constructor` should be capitalized
  */
function ContructorFunction () { }

/**
 * - `new` keyword is used to create an instance of a function
 * - the function after `new` is being used as a constructor
 */
let instance = new ContructorFunction();

/**
 * add methods to ContructorFunction
 * all functions get `prototype` object when they are created
 */
ContructorFunction.prototype.someMethod = function() {
  console.log("I am some method");
};
// test
instance = new ContructorFunction();
instance.someMethod(); // logs: I am some method
/**
 * TAKE AWAY: creating `someMethod` on ConstructorFunction's
 *  `prototype`, made it available on all instances (new) 
 *  of ConstructorFunction
 */

/** 
 * Differential Inheritance meaning
 * `instance` does not own a method called `someMethod`
 */
console.log(instance.hasOwnProperty("someMethod")) // logs: false
/** 
 * What actually happens:
 *  - JS engine looks for property `someMethod` on instance object
 *  - It does not find one, so it looks `up the prototype chain` to 
 *    instance's parent, which is `ContructorFunction.prototype`
 *  - It finds `ContructorFunction.prototype.someMethod` and calls
 *    it with `this` bound to `instance`
 */

 /**
  * Object.create()
  * - It creates an new, empty object with `parent` in it prototype chain
  */
let parent = {
  foo: () => { console.log(`I am parent's foo`) }
};
let child = Object.create(parent);
console.log(child.hasOwnProperty('foo')) // logs: false
child.foo(); // logs: I am parent's foo

// trying
function Car() { }
Car.prototype.drive = function() {
  console.log("I am driving");
};
let amg = new Car();
amg.drive(); // logs: I am driving

// Putting it all together
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
const rect = new Rectangle(3, 4);
console.log(rect.area()) // logs: 12

/** Sub-classing
 * Square should inherit from Rectangle
 */
function Square(side) {
  this.width = this.height = side;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.diagonal = function() {
  return Math.sqrt( this.area() * 2 );
}
const sq = new Square(4);
console.log(sq.area()); // logs: 16
console.log(sq.diagonal()); // logs: 5.6

/**
 * Time travel
 * - In JavaScript inheritance, we can modify or extend the capabilities
 *   of a class after we've defined it
 * - Because JavaScript will look up the prototype when trying to access
 *   properties on an object, you can alter classesa at runtime
 */
// never do this
let arr = [3, 2, 5, 8, 5];
Array.prototype.shuffle = function() {
  return this.sort(function() {
    return Math.round( Math.random() * 2 ) - 1;
  });
};
console.log(arr.shuffle()); // logs: shuffled arr

/**
 * Difference between Class & Prototypal inheritance
 */
/**
 * Class Inheritance
 * - A Class is like a `blueprint` - a description of the object to be created
 * - Classes inherit from classes and create `sub-class relationships`: heirarchical class taxonomies
 * - `class` technically does not exist in JavaScript. Constructor functions are used instead
 * - `class` keyword desugars to constructor function
 */
class SomeClass { }
console.log(typeof SomeClass); // logs: function