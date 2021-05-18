import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrizeListarComponent } from './prize-listar/prize-listar.component';
import { PrizeDetailComponent } from './prize-detail/prize-detail.component';
import { PrizeCreateComponent } from './prize-create/prize-create.component';
import { PrizeComponent } from './prize.component';


const routes: Routes = [{
  path: 'prizes',
  component: PrizeComponent,
  children: [

    {
      path: 'list',
      component: PrizeListarComponent
    },
    {
      path: 'add',
      component: PrizeCreateComponent
    },
    {
      path: ':id',
      component: PrizeDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrizeRoutingModule { }
