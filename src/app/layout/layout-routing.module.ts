import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../raports/raports.module').then((m) => m.RaportsModule),
      },
      {
        path: 'leader-panel',
        loadChildren: () => import('../leader-panel/leader-panel.module').then((m) => m.LeaderPanelModule),
      },
      {
        path: 'admin-panel',
        loadChildren: () => import('../admin-panel/admin-panel.module').then((m) => m.AdminPanelModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
