// function log(message)
// {
//     console.log(message);
// }

// var message = 'Hello World';

// log(message)

// var number = 1;
// let count = 2;

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething();

// TypeScript Types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 0, Blue = 0, Purple = 3};
let backgroundColor = Color.Blue;
let backgroundColor2 = Color.Red;
let backgroundColor3 = Color.Green;

// Types of Assertions
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternative = (message as string).endsWith('c');

// Arrow Functions
let log = function(message)
{
    console.log(message);
}

let doLog = (message) => console.log(message);
let doLogWithNoParams = () => console.log(message);

    //Interfaces Allow you to predefine an object, cannot have implementation, only a signature
    // interface Point {
    //     x: number,
    //     y: number,
    //     draw: () => void
    // }

    // This works but is verbose:
    //  let drawPoint = (point: {x: number, y: number}) => {//code//}
    // This is why we would use interfaces like the above


    // Cohesion: Things that need to be together should stay together

    // Class: groups variables (properties) and functions (methods) that are highly related

class Point {
    x: number;
    y: number;
    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y);
    }

    getDistance(another: Point) {

    }
}

//Object use for the above class
let point = new Point();
point.x = 3
point.y = 5
point.draw();




