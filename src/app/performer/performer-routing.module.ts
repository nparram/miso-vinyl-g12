
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformerListarComponent } from './performer-listar/performer-listar.component';
import { PerformerDetailComponent } from './performer-detail/performer-detail.component';

const routes: Routes = [{
  path: 'performers',
  children: [
    {
      path: 'list',
      component: PerformerListarComponent
    },
    {
      path: ':id',
      component: PerformerDetailComponent,
      runGuardsAndResolvers: 'always'
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformerRoutingModule { }
