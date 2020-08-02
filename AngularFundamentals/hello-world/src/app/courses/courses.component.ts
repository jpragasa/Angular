import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "Courses List";
  email = "me@example.com";
  isActive = true;
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  courses = [];
  text = `Lorem Ipsum blah blah blah`;
  course = {
    title: "The Complete Angular Course",
    rating: 5,
    students: 30999,
    price: 10,
    releaseDate: new Date(2020, 7, 31)
  }
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

  onKeyUp() {
    // console.log($event.target.value);
    // document.querySelector("div").innerHTML = `${$event.target.value}`;
    document.querySelector("div").innerHTML = `${this.email}`;
  }


}
