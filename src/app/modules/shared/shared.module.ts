import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { ContainerComponent } from './components/container/container.component';
import { ScreenContainerComponent } from './components/screen-container/screen-container.component';
import { ContainerActionsComponent } from './components/container-actions/container-actions.component';
import { ClickableDirective } from './directives/clickable.directive';
import { ScreenNavigationComponent } from './components/screen-navigation/screen-navigation.component';
import { IconComponent } from './components/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WithLoadingPipe } from './pipes/with-loading.pipe';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ButtonComponent,
    LinkComponent,
    ContainerComponent,
    ContainerActionsComponent,
    ScreenContainerComponent,
    ScreenNavigationComponent,
    ClickableDirective,
    IconComponent,
    WithLoadingPipe,
  ],
  declarations: [
    ButtonComponent,
    LinkComponent,
    ContainerComponent,
    ContainerActionsComponent,
    ScreenContainerComponent,
    ScreenNavigationComponent,
    ClickableDirective,
    IconComponent,
    WithLoadingPipe,
  ],
  imports: [CommonModule, FontAwesomeModule],
})
export class SharedModule {}
