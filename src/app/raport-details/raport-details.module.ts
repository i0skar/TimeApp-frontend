import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaportDetailsComponent } from './raport-details.component';
import { RaportDetailsWeekComponent } from './components/raport-details-week/raport-details-week.component';
import { SharedModule } from '../shared/shared.module';
import { WeekUpdateComponent } from './components/week-update/week-update.component';
import { ProjectsService } from './projects.service';

@NgModule({
  declarations: [RaportDetailsComponent, RaportDetailsWeekComponent, WeekUpdateComponent],
  imports: [CommonModule, SharedModule],
  entryComponents: [RaportDetailsComponent, RaportDetailsWeekComponent],
  providers: [ProjectsService],
})
export class RaportDetailsModule {}
