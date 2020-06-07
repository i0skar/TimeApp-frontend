import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderPanelComponent } from './leader-panel.component';
import { LeaderPanelRoutingModule } from './leader-panel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './components/project/project.component';
import { ManageRaportsService } from './manage-raports.service';
import { ClosedRaportsComponent } from './components/closed-raports/closed-raports.component';
import { RaportDetailsModule } from '../raport-details/raport-details.module';
import { ManageProjectsService } from './manage-projects.service';

@NgModule({
  declarations: [LeaderPanelComponent, ClosedRaportsComponent, ProjectComponent],
  imports: [CommonModule, LeaderPanelRoutingModule, RaportDetailsModule, SharedModule],
  providers: [ManageRaportsService, ManageProjectsService],
})
export class LeaderPanelModule {}
