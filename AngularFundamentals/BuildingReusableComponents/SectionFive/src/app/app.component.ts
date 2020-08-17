import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SectionFive';
  isActive: boolean;
  imageUrl: string;
  Clicked() {
    this.isActive = !this.isActive;
    if(this.isActive) {
      this.imageUrl = "";
      document.querySelector("button").innerHTML = "Push me :)";
    }
    else {
      this.imageUrl = "https://www.zarias.com/wp-content/uploads/2015/12/61-cute-puppies.jpg";
      document.querySelector("button").innerHTML = "Henlo";
    }
  }
}
