export class Point {

    constructor(private _x?: number, private _y?: number) {
        this._x = _x;
        this._y = _y;
    }

    draw() {
        console.log('X: ' + this._x + '\n' + 'Y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(value) {
        if(value < 0) {
            throw new Error('value cannot be less than 0');
        }
        else {
            this._x = value;
        }
    }

    set y(value) {
        if(value < 0) {
            throw new Error('value cannot be less than 0');
        }
        else {
            this._y = value;
        }
    }
}