import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "3 Authors";
  authors;

  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
