import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses',  // <courses> "courses" or <div class="courses"> '.courses' or <div id="courses"> "#courses"
    // The title is databinded to the title variable
    //template: '<h2> {{getTitle()}} </h2>'

    //DIRECTIVES: manipulates the DOM, if you are using one that manipulates the DOM, make sure you prefix it with *. Example: *ngFor="adfasdfas"
    template: 
    `
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {this.courses = service.getCourses()}

    getTitle() {
        return this.title;
    }
}