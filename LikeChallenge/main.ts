import {Like} from './likefunction';


let like = new Like(false, 10);

like.onClick();

console.log(`likesCount: ${like.numberOfLikes}, isSelected : ${like.IsOn}`);

like.onClick();

console.log(`likesCount: ${like.numberOfLikes}, isSelected : ${like.IsOn}`);