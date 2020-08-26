export class LikeFunction {
    constructor(private _numberOfLikes?: number, private liked: boolean = false) {}

    likeToggle() {
        this.liked = !this.liked;
        // if(this.liked) {
        //     this._numberOfLikes += 1;
        // }
        // else {
        //     this._numberOfLikes -= 1;
        // }

        this._numberOfLikes += (this.liked) ? 1 : -1;
    }

    get numberOfLikes() {
        return this._numberOfLikes;
    }
}