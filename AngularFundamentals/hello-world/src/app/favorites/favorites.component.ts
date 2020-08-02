import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  isActive = false;
  // selection = document.getElementById("fav");
  // starIcon = "glyphicon glyphicon-star-empty";

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  Click() {
    this.isActive = !this.isActive;
    
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
