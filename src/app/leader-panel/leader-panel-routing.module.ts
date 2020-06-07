import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderPanelComponent } from './leader-panel.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderPanelRoutingModule {}
