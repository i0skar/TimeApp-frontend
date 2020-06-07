import { Component, Input } from '@angular/core';
import { Raport } from 'src/app/raports/models';

@Component({
  selector: 'app-closed-raports',
  templateUrl: './closed-raports.component.html',
  styleUrls: ['./closed-raports.component.scss'],
})
export class ClosedRaportsComponent {
  @Input() closedRaport: Raport[];
}
