import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaportsComponent } from './raports.component';

const routes: Routes = [
  {
    path: '',
    component: RaportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaportsRoutingModule {}
