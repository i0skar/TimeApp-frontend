import { Component, OnInit } from '@angular/core';
import { Raport } from './models/raport';
import { MatDialog } from '@angular/material/dialog';
import { groupArrayByProperty } from '../utlis';
import { RaportDetailsComponent } from '../raport-details/raport-details.component';
import { RaportsService } from './raports.service';

@Component({
  selector: 'app-raports',
  templateUrl: './raports.component.html',
  styleUrls: ['./raports.component.scss'],
})
export class RaportsComponent implements OnInit {
  raports: Raport[] = [];
  userEmail = localStorage.getItem('email');
  constructor(public dialog: MatDialog, private raportsService: RaportsService) {}

  ngOnInit() {
    this.getRaports();
  }

  openDetailsPopup(raport: Raport) {
    const dialog = this.dialog.open(RaportDetailsComponent, {
      data: { raport },
      width: '600px',
      autoFocus: false,
    });
    dialog.afterClosed().subscribe((closedRaport) => {
      if (closedRaport != null) {
        this.closeRaport(closedRaport);
      }
    });
  }

  private getRaports() {
    this.raportsService.getUserRaports(this.userEmail).subscribe((res) => {
      this.raports = groupArrayByProperty(res, 'isClosed');
    });
  }

  private closeRaport(closedRaport: Raport) {
    const updatedRaport = { ...closedRaport };
    updatedRaport.isClosed = true;
    this.raportsService.closeRaport(closedRaport.id, updatedRaport).subscribe(() => {
      this.getRaports();
    });
  }
}
