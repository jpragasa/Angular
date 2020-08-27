import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors;
  authorCount;

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
    this.authorCount = service.getLength(this.authors);
   }

  ngOnInit(): void {
  }

}
