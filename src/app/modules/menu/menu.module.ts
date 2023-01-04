import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './screens/cards/cards.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CircleButtonComponent } from './components/header/components/circle-button/circle-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent,
    ConfigurationComponent,
    MenuComponent,
    CircleButtonComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatSidenavModule,
    SharedModule,
  ],
})
export class MenuModule {}
