"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeFunction = void 0;
var LikeFunction = /** @class */ (function () {
    function LikeFunction(_numberOfLikes, liked) {
        if (liked === void 0) { liked = false; }
        this._numberOfLikes = _numberOfLikes;
        this.liked = liked;
    }
    LikeFunction.prototype.likeToggle = function () {
        this.liked = !this.liked;
        // if(this.liked) {
        //     this._numberOfLikes += 1;
        // }
        // else {
        //     this._numberOfLikes -= 1;
        // }
        this._numberOfLikes += (this.liked) ? 1 : -1;
    };
    Object.defineProperty(LikeFunction.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: false,
        configurable: true
    });
    return LikeFunction;
}());
exports.LikeFunction = LikeFunction;
