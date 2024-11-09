import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartwarsComponent } from './startwars/startwars.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'star-wars', component: StartwarsComponent },
];
