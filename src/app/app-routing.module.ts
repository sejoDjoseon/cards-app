import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './modules/menu/menu.component';
import { CardsComponent } from './modules/menu/screens/cards/cards.component';
import { LessonsComponent } from './modules/menu/screens/lessons/lessons.component';
import { PlayerComponent } from './modules/player/player.component';

const routes: Routes = [
  {
    path: 'cards',
    component: MenuComponent,
    children: [
      { path: '', component: CardsComponent },
      { path: 'lessons/:tr', component: LessonsComponent },
    ],
  },
  {
    path: 'player',
    component: PlayerComponent,
  },
  {
    path: '**',
    redirectTo: 'cards',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
