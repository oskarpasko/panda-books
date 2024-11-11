import { Component } from '@angular/core';
import { STARWARS_BOOKS } from '../data/starwars-data';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrl: './starwars.component.scss'
})
export class StarwarsComponent {

  books = STARWARS_BOOKS;
  searchTitle = '';
  selectedType = '';

  constructor(){};

  filteredBooks() {
    return this.books.filter(book => {
      const matchesTitle = book.title.toLowerCase().includes(this.searchTitle.toLowerCase());
      const matchesType = this.selectedType ? book.type === this.selectedType : true;

      return matchesTitle && matchesType;
    });
  }
}
