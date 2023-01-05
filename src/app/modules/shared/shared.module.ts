import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { ContainerComponent } from './components/container/container.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ButtonComponent,
    LinkComponent,
    ContainerComponent,
    ListComponent,
  ],
  declarations: [
    ButtonComponent,
    LinkComponent,
    ContainerComponent,
    ListComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
