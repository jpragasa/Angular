"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_onOrOff, _numberOfLikes) {
        if (_onOrOff === void 0) { _onOrOff = false; }
        if (_numberOfLikes === void 0) { _numberOfLikes = 0; }
        this._onOrOff = _onOrOff;
        this._numberOfLikes = _numberOfLikes;
    }
    Like.prototype.debugger = function () {
        console.log("On? : " + this._onOrOff + "\n Number of Likes: " + this._numberOfLikes);
    };
    Like.prototype.onClick = function () {
        if (this._onOrOff) {
            this._numberOfLikes--;
            if (this._numberOfLikes <= 0) {
                this._numberOfLikes = 0;
            }
        }
        else {
            this._numberOfLikes++;
        }
        this._onOrOff = !this._onOrOff;
    };
    Object.defineProperty(Like.prototype, "numberOfLikes", {
        // addOrSubtractLikes()
        // {
        //     if(this._onOrOff === true)
        //     {
        //         this._numberOfLikes += 1;
        //     }
        //     else
        //     {
        //         this._numberOfLikes -= 1;
        //     }
        // }
        // switcher(_onOrOff) {
        //     this._onOrOff = !this._onOrOff;
        // }
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "IsOn", {
        get: function () {
            return this._onOrOff;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
