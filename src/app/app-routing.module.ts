import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './modules/menu/menu.component';
import { CardsComponent } from './modules/menu/screens/cards/cards.component';
import { PlayerComponent } from './modules/player/player.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [{ path: '', component: CardsComponent }],
  },
  {
    path: 'player',
    component: PlayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
