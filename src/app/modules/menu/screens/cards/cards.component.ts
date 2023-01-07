import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
})
export class CardsComponent {
  constructor(private router: Router) {}

  navigateTrimesterLessons() {
    this.router.navigate(['/cards/lessons', '1']);
  }
}
