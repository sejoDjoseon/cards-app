import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './screens/cards/cards.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CircleButtonComponent } from './components/header/components/circle-button/circle-button.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import { LessonsComponent } from './screens/lessons/lessons.component';
import { TrimesterProgressComponent } from './components/trimester-progress/trimester-progress.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsListHeaderComponent } from './components/lessons-list/components/lessons-list-header/lessons-list-header.component';
import { LessonsListRowComponent } from './components/lessons-list/components/lessons-list-row/lessons-list-row.component';
import { LessonsListProgressComponent } from './components/lessons-list/components/lessons-list-progress/lessons-list-progress.component';
import { CourseService } from './services/course.service';
import { CurrentLessonPipe } from './screens/cards/pipes/current-lesson.pipe';
import { ConfigurationService } from './services/configuration.service';

@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent,
    ConfigurationComponent,
    MenuComponent,
    CircleButtonComponent,
    LessonsComponent,
    TrimesterProgressComponent,
    LessonsListComponent,
    LessonsListHeaderComponent,
    LessonsListRowComponent,
    LessonsListProgressComponent,
    CurrentLessonPipe,
  ],
  imports: [CommonModule, AppRoutingModule, MatSidenavModule, SharedModule],
  providers: [CourseService, ConfigurationService],
})
export class MenuModule {}
