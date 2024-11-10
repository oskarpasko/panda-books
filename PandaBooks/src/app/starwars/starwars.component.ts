import { Component } from '@angular/core';
import { STARWARS_BOOKS } from '../data/starwars-data';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrl: './starwars.component.scss'
})
export class StarwarsComponent {

  books = STARWARS_BOOKS;

  constructor(){};

}
