import { Component, Input, OnInit } from '@angular/core';
import { getFaIcon, IconName } from 'src/shared/icons-helper';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],
})
export class IconComponent implements OnInit {
  @Input()
  icon: IconName = IconName.Coffe;

  @Input()
  size?: 'S' | 'M' | 'L';

  faSize?: SizeProp;

  faIcon?: IconDefinition;

  ngOnInit() {
    this.faIcon = getFaIcon(this.icon);
    if (!!this.size) {
      this.faSize = {
        S: 'sm' as const,
        M: undefined,
        L: 'lg' as const,
      }[this.size];
    }
  }
}
