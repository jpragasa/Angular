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
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
var backgroundColor2 = Color.Red;
var backgroundColor3 = Color.Green;
// Types of Assertions
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternative = message.endsWith('c');
// Arrow Functions
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var doLogWithNoParams = function () { return console.log(message); };
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
var Point = /** @class */ (function () {
    // Access modiefies: public, protected, private
    // private x: number;
    // private y: number;
    // Adding ? will make the parameter optional
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this._x + ', y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            else {
                this._x = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            else {
                this._y = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
//Object use for the above class
var point = new Point(1, 2);
// let x = point.X;
// point.X = 10;
var x = point.x;
point.x = 10;
point.draw();
