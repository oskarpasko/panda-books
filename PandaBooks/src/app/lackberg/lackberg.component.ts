import { Component } from '@angular/core';
import { LACKBERG_BOOKS } from '../data/lackberg-data';

@Component({
  selector: 'app-lackberg',
  templateUrl: './lackberg.component.html',
  styleUrl: './lackberg.component.scss'
})
export class LackbergComponent {

  books = LACKBERG_BOOKS;
  searchTitle = '';

  constructor(){};

  filteredBooks() {
    return this.books.filter(book => {
      const matchesTitle = book.title.toLowerCase().includes(this.searchTitle.toLowerCase());

      return matchesTitle;
    });
  }

}
