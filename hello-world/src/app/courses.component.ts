import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses',  // <courses> "courses" or <div class="courses"> '.courses' or <div id="courses"> "#courses"
    // The title is databinded to the title variable
    //template: '<h2> {{getTitle()}} </h2>'

    //DIRECTIVES: manipulates the DOM, if you are using one that manipulates the DOM, make sure you prefix it with *. Example: *ngFor="adfasdfas"
    template: 
    `
    <!-- This is an interpolation example -->
    <!-- <h2>{{getTitle()}}</h2> -->

    <!-- This is Property Binding Example -->
    <h2 [textContent]="title"></h2>

    <!-- This is an interpolation example -->
    <img src="{{imageUrl}}" />

    <!-- This is Property Binding Example -->
    <!-- <img [src]="imageUrl"/> -->
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>

    <!-- This is an Attribute Binding Example -->
    <table>
        <tr>
            <!--the .attr is a rare case where you are accessing the html attribute within the td element-->
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>

    <!-- BOOTSTRAP EXAMPLE -->
    <!-- CLASS BINDING EXAMPLE ADDED ON -->
    <!-- SYLE BINDING EXAMPLE ADDED ON (For more style properties, go to w3schools -->
    <!-- EVENT BINDING EXAMPLE ADDED ON (Events raised from the DOM) -->
    <!-- *Bubbling UP the DOM tree occurs unless there is a handler to prevent it -->
    <div (click)="onDivClicked($event)">
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray' " [class.active]="isActive" (click)="onSave($event)">Save</button>
    </div>


    <!-- TRADITIONAL EVENT FILTERING EXAMPLE -->
    <!-- <input (keyup)="onKeyUp($event)" /> -->

    <!-- EVENT FILTERING EXAMPLE -->
    <!-- *there are a lot more keyup properties you can look up -->
    <!-- TEMPLATE VARIABLES EXAMPLE ADDON -->
    <!-- <input #email (keyup.enter)="onKeyUp(email.value)" /> -->

    
    <!-- STANDARD (NOT PREFERRED WAY) -->
    <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" /> -->
    <!-- TWO WAY BINDING EXAMPLE -->
    <!-- * When using ngModel, you must import the FORMS module in app.module -->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <!-- TITLECASE USAGE -->
    <br>
    {{email | titleCase}}

    <!-- PIPES EXAMPLE (Uppercase, Lowercase, Decimal, Currency, Percent) -->

    <br/> {{course.title | uppercase}} <br/>
    Student Count: {{course.students | number}} <br/>
    <!--To display certain decimal points, refer to the example below (1 is the amount of integer numbers, 2-2 is the number of decimal places)-->
    Rating: {{course.rating | number:'1.2-2'}} <br/>
    <!--The example below changes currency to australian dollars, look up different currencies for different usage-->
    Price: {{course.price | currency:'AUD':'code':'3.2-2'}} <br/>
    Release: {{course.releaseDate | date:'shortDate'}} <br/>

    <!-- CUSTOM PIPES EXAMPLE -->
        {{text | summary:10}}

    
    <!-- PIPE CHALLENGE: Make input into title Case-->


    `
})
export class CoursesComponent {
    title = "List of courses";
    // imageUrl is used for Property Binding Example
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    courses;
    isActive: boolean = false;
    email = "josh@example.com";
    course = {
        title: "The Complete Angular Course",
        rating: 5,
        students: 1000,
        price: 10.5,
        releaseDate: new Date(2020, 8, 31)
    }
    text =
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `

    constructor(service: CoursesService) {this.courses = service.getCourses()}

    getTitle() {
        return this.title;
    }

    onSave($event) {
        console.log($event);
        // This ensures that the events after this do NOT occur
        $event.stopPropagation();
        this.isActive = !this.isActive;
    }

    onDivClicked($event) {
        console.log("Div was clicked");
    }

    onKeyUp() {
        console.log(this.email);
    }
}