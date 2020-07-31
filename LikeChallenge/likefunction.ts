export class Like
{
    constructor(private _onOrOff: boolean = false, private _numberOfLikes: number = 0)
    {
        
    }

    debugger()
    {
        console.log("On? : " + this._onOrOff + "\n Number of Likes: " + this._numberOfLikes);
    }

    onClick()
    {
        if(this._onOrOff)
        {
            this._numberOfLikes--;
            if(this._numberOfLikes <= 0)
            {
                this._numberOfLikes = 0;
            }
        }
        else
        {
            this._numberOfLikes++;
        }

        this._onOrOff = !this._onOrOff;
    }

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

    get numberOfLikes()
    {
        return this._numberOfLikes;
    }

    get IsOn()
    {
        return this._onOrOff;
    }
    
}