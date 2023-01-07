import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-navigation',
  templateUrl: './screen-navigation.component.html',
  styleUrls: ['./screen-navigation.component.sass'],
})
export class ScreenNavigationComponent {
  constructor(private router: Router) {}

  backToCards() {
    this.router.navigate(['../']);
  }
}
