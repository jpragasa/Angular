// The @Input allows us to use that decorator
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  //Rather than adding Input to use the @Input decorator, you can declare the input properties here
  inputs: ['isSelected']
})
export class FavoritesComponent implements OnInit {

  isActive = false;
  // selection = document.getElementById("fav");
  // starIcon = "glyphicon glyphicon-star-empty";

  //@Input is a decorator for marking input properties
  @Input('isFavorite') isSelected: boolean;
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  Click() {
    this.isSelected = !this.isSelected;
    
    // if(this.isActive == true) {
    //   this.starIcon = "glyphicon glyphicon-star";
    //   this.selection.className = this.starIcon;
    // }
    // else {
    //   this.starIcon = "glyphicon glyphicon-star-empty";
    //   this.selection.className = this.starIcon;
    // }
  }
}
