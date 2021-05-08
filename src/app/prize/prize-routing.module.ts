import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrizeListarComponent } from './prize-listar/prize-listar.component';
import { PrizeDetailComponent } from './prize-detail/prize-detail.component';

const routes: Routes = [{
  path: 'prizes',
  children: [

    {
      path: 'list',
      component: PrizeListarComponent
    },
    {
      path: ':id',
      component: PrizeDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrizeRoutingModule { }
