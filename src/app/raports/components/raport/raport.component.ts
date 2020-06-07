import { Component, Input } from '@angular/core';
import { Raport } from '../../models/raport';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.scss'],
})
export class RaportComponent {
  @Input() raport: Raport;
}
