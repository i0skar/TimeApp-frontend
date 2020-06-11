import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';
import { Raport } from '../raports/models';
import { ManageRaportsService } from './manage-raports.service';
import { MatDialog } from '@angular/material/dialog';
import { RaportDetailsComponent } from '../raport-details/raport-details.component';
import { ManageProjectsService } from './manage-projects.service';

@Component({
  selector: 'app-leader-panel',
  templateUrl: './leader-panel.component.html',
  styleUrls: ['./leader-panel.component.scss'],
})
export class LeaderPanelComponent implements OnInit {
  closedRaports: Raport[];
  projects: Project[];

  constructor(
    public dialog: MatDialog,
    private manageRaportsService: ManageRaportsService,
    private manageProjectsService: ManageProjectsService
  ) {}

  ngOnInit() {
    this.getClosedReports();
    this.getProjects();
  }

  openRaportDetailsPopup(raport: Raport) {
    const dialog = this.dialog.open(RaportDetailsComponent, {
      data: { raport, showLeaderOptions: true },
      width: '600px',
      autoFocus: false,
    });
    dialog.afterClosed().subscribe((res: { raport: Raport; state: string }) => {
      if (res == null) {
        return;
      }
      switch (res.state) {
        case 'accept':
          this.acceptRaport(res.raport);
          break;
        case 'reject':
          this.rejectRaport(res.raport);
          break;
      }
    });
  }

  private getClosedReports() {
    this.manageRaportsService.getClosedRaports().subscribe((res: any) => (this.closedRaports = res.raports));
  }

  private acceptRaport(raport: Raport) {
    this.manageRaportsService.acceptRaport(raport.id).subscribe(() => {
      this.getClosedReports();
    });
  }

  private rejectRaport(raport: Raport) {
    this.manageRaportsService.rejectRaport(raport.id).subscribe(() => {
      this.getClosedReports();
    });
  }

  private getProjects() {
    this.manageProjectsService.getProjects().subscribe((res) => (this.projects = res));
  }
}
