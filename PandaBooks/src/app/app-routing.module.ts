import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { JonesboComponent } from './jonesbo/jonesbo.component';
import { LackbergComponent } from './lackberg/lackberg.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'star-wars', component: StarwarsComponent },
  { path: 'jo-nesbo', component: JonesboComponent },
  { path: 'lackberg', component: LackbergComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
