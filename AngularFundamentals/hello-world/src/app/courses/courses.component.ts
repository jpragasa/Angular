import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "Courses List";
  isActive = true;
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  courses = [];
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
   }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

  onSave($event) {
    console.log(event);
    //propogation ensures that it will NOT bubble up
    $event.stopPropagation();
    document.querySelector("button").innerHTML = ` I was clicked :)`;
  }

  onDivClicked() {
    document.querySelector("div").innerHTML = `Div was clicked :)`;
  }

  onKeyUp(email) {
    // console.log($event.target.value);
    // document.querySelector("div").innerHTML = `${$event.target.value}`;
    document.querySelector("div").innerHTML = `${email}`;
  }

}
