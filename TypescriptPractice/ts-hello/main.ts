/*

 *This is a function that prints out the message hello-world*

 function log(message) {
     console.log(message);
 }

 var message = 'Hello World';

 log(message);
*/



/*

 *  TIP: you can transpile and run the js file at the same time
        - tsc main.ts && node main.js

*/



// Variables
 // ES5 supported by all browsers
 // ES6(2015)
 // Using let in the example below will cause an error with i due to it being out of scope

/*



var number = 1;
let count = 2;

function doSomething() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('finally ' + i)
}

doSomething();



*/



// TypeScript variable types:
//  - number, boolean, string, any, (number[], boolean[], string[], etc....)
// Use type annotations if you wanna specify a type
// Ex:
    // let a: number;
    // let b: boolean;
    // let c: string;
    // let d: any;
    // let e: number[] = [1, 2, 3];
    // let f: any[] = [1, true, 'a', false];
// ENUMS
    // enum Color {Red = 0, Green = 2, Blue = 3};
    // let backgroundColor = Color.Blue;
    // console.log(backgroundColor);



// TYPE ASSERTIONS
// message is of type 'any'. In this form, intellisense does not work. It will reappear if you assert the type in a new place: (<string>message) This is the example listed below
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');



// ARROW FUNCTIONS
// let log = function(message) {
//     console.log(message);
// }

// let doLog = (message) => console.log(message);



// INTERFACES: defines the shape of the object
// When defining interfaces, use Pascal naming convention PascalNamingConventionExample
// point:number (This is an IN TYPE ANNOTATION) Another way is:     point: {x: number, y: number}
//
// interface Point {
//     x: number,
//     y: number
// }

// let drawPoint = (point: Point) => {
//     //....
// }

// drawPoint({
//     x: 1,
//     y: 2
// })



//CLASSES: Groups variables (properties) and (functions) that are related
// Cohesion: things that are related, should stay in the same group

// class Point {
//     x: number;
//     y: number;

//     draw() {
//         console.log('X:' + this.x);
//         console.log('Y:' + this.y)
//     }

//     getDistance(another: Point) {

//     }
// }


//OBJECTS (This uses the above example)
// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();

//CONSTRUCTORS
//Question marks after the variable param allows for that variable to be OPTIONAL
// class Point {
//     x: number;
//     y: number;

//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + '\n' + 'Y: ' + this.y);
//     }

//     getDistance(another:Point) {

//     }
// }

// let point = new Point();
// point.draw();



//ACCESS MODIFIERS
// public, private, protected
// class Point {
//     //private variable
//     private x: number;
//     //public variable
//     public y: number;

//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + '\n' + 'Y: ' + this.y);
//     }

//     getDistance(another:Point) {

//     }
// }

// let point = new Point();
// point.draw();



//ACCESS MODIFIERS IN CONSTRUCTOR PARAMS
// class Point {

//     constructor(private x?: number, public y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + '\n' + 'Y: ' + this.y);
//     }

//     getDistance(another:Point) {

//     }
// }

// let point = new Point();

// point.draw();



//PROPERTIES
// class Point {

//     constructor(private _x?: number, private _y?: number) {
//         this._x = _x;
//         this._y = _y;
//     }

//     draw() {
//         console.log('X: ' + this._x + '\n' + 'Y: ' + this._y);
//     }

//     get x() {
//         return this._x;
//     }

//     get y() {
//         return this._y;
//     }

//     set x(value) {
//         if(value < 0) {
//             throw new Error('value cannot be less than 0');
//         }
//         else {
//             this._x = value;
//         }
//     }

//     set y(value) {
//         if(value < 0) {
//             throw new Error('value cannot be less than 0');
//         }
//         else {
//             this._y = value;
//         }
//     }
// }

// let point = new Point();
// point.x = 100;
// point.y = 200;
// point.draw();



//MODULES
// import {Point} from './point';

// let point = new Point(5, 99);
// point.draw();




//LIKEFUNCTION CHALLENGE
import {LikeFunction} from './LikeFunction';

let newLike = new LikeFunction(10, false);

// console.log('Likes: ' + newLike.numberOfLikes);

// newLike.likeToggle();

// console.log('Likes: ' + newLike.numberOfLikes);

// newLike.likeToggle();

// console.log('Likes: ' + newLike.numberOfLikes);

console.log(`Likes: ${newLike.numberOfLikes}`);
newLike.likeToggle();
console.log(`Likes: ${newLike.numberOfLikes}`);
newLike.likeToggle();
console.log(`Likes: ${newLike.numberOfLikes}`);


//USE THIS IF YOU WANT TO COMPILE ALL YOUR TYPESCRIPTS
// tsc *.ts && node main.js
