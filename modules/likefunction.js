"use strict";
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_onOrOff, _numberOfLikes) {
        if (_onOrOff === void 0) { _onOrOff = false; }
        if (_numberOfLikes === void 0) { _numberOfLikes = 0; }
        this._onOrOff = _onOrOff;
        this._numberOfLikes = _numberOfLikes;
    }
    Like.prototype["debugger"] = function () {
        console.log("On? : " + this._onOrOff + "\n Number of Likes: " + this._numberOfLikes);
    };
    Like.prototype.addLikes = function () {
        if (this._onOrOff === true) {
            this._numberOfLikes += 1;
        }
        else {
            this._numberOfLikes -= 1;
        }
        this["debugger"]();
    };
    Like.prototype.switcher = function (_onOrOff) {
        return !this._onOrOff;
    };
    Like.prototype.getnumberOfLikes = function () {
        return this._numberOfLikes;
    };
    return Like;
}());
exports.Like = Like;
