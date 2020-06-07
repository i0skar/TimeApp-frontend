import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Week } from '../../models/week';

@Component({
  selector: 'app-raport-details-week',
  templateUrl: './raport-details-week.component.html',
  styleUrls: ['./raport-details-week.component.scss'],
})
export class RaportDetailsWeekComponent {
  @Input() week: Week;
  @Input() isClosed: boolean;
  @Output() updateWeek = new EventEmitter();
}
