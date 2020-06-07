import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaportsComponent } from './raports.component';
import { RaportsRoutingModule } from './raports-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RaportComponent } from './components/raport/raport.component';
import { RaportDetailsModule } from '../raport-details/raport-details.module';
import { RaportsService } from './raports.service';

@NgModule({
  declarations: [RaportsComponent, RaportComponent],
  imports: [CommonModule, SharedModule, RaportsRoutingModule, RaportDetailsModule],
  providers: [RaportsService],
})
export class RaportsModule {}
