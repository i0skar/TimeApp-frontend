import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(({ LoginModule }) => LoginModule),
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(({ LayoutModule }) => LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
