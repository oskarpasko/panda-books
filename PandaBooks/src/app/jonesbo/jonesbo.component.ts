import { Component } from '@angular/core';
import { JONESBO_BOOKS } from '../data/jonesbo-data';

@Component({
  selector: 'app-jonesbo',
  templateUrl: './jonesbo.component.html',
  styleUrl: './jonesbo.component.scss'
})
export class JonesboComponent {

  books = JONESBO_BOOKS;
  searchTitle = '';

  constructor(){};

  filteredBooks() {
    return this.books.filter(book => {
      const matchesTitle = book.title.toLowerCase().includes(this.searchTitle.toLowerCase());

      return matchesTitle;
    });
  }
}
