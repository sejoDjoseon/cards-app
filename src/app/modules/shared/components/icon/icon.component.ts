import { Component, Input, OnInit } from '@angular/core';
import { getFaIcon, IconName } from 'src/shared/icons-helper';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],
})
export class IconComponent implements OnInit {
  @Input()
  icon: IconName = IconName.Coffe;

  faIcon?: IconDefinition;

  ngOnInit() {
    this.faIcon = getFaIcon(this.icon);
  }
}
