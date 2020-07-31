"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likefunction_1 = require("./likefunction");
var like = new likefunction_1.Like(false, 10);
like.onClick();
console.log("likesCount: " + like.numberOfLikes + ", isSelected : " + like.IsOn);
like.onClick();
console.log("likesCount: " + like.numberOfLikes + ", isSelected : " + like.IsOn);
