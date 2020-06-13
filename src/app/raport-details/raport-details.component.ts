import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Week } from './models/week';

@Component({
  selector: 'app-raport-details',
  templateUrl: './raport-details.component.html',
  styleUrls: ['./raport-details.component.scss'],
})
export class RaportDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  isUpdateMode = false;
  updatingWeek: Week;
  isEditProjectMode = false;

  updateWeek(week: Week) {
    this.isUpdateMode = true;
    this.updatingWeek = week;
  }

  editProject(week) {
    this.isEditProjectMode = true;
    this.updatingWeek = week;
    console.log(week);
  }
}
