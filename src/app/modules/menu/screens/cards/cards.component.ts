import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
})
export class CardsComponent {
  click() {
    console.log('click');
  }
}
