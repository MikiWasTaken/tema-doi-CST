import { RandomPageComponent } from './random-page/random-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {component: RandomPageComponent, path: "random"},
  {path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
