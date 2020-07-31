export class Like
{
    constructor(private _onOrOff: boolean = false, private _numberOfLikes: number = 0)
    {
        
    }

    debugger()
    {
        console.log("On? : " + this._onOrOff + "\n Number of Likes: " + this._numberOfLikes);
    }

    addLikes()
    {
        if(this._onOrOff === true)
        {
            this._numberOfLikes += 1;
        }
        else
        {
            this._numberOfLikes -= 1;
        }

        this.debugger();
    }

    switcher(_onOrOff) {
        return !this._onOrOff;
    }

    getnumberOfLikes()
    {
        return this._numberOfLikes;
    }

    
}