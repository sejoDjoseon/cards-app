import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  constructor(private configurationService: ConfigurationService) {}

  configurationObs$?: Observable<void>;

  ngOnInit() {
    this.configurationObs$ =
      this.configurationService.loadCurrentConfiguration();
  }
}
