
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformerListarComponent } from './performer-listar/performer-listar.component';
import { PerformerDetailComponent } from './performer-detail/performer-detail.component';
import { PerformerCreateComponent } from './performer-create/performer-create.component';
import { PerformerComponent} from './performer.component';



const routes: Routes = [{
  path: 'performers',
  component: PerformerComponent,
  children: [
    {
      path: 'list',
      component: PerformerListarComponent
    },

    {
      path: 'add',
      component: PerformerCreateComponent
    },

    {
      path: ':id',
      component: PerformerDetailComponent,
      runGuardsAndResolvers: 'always'
    },
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PerformerRoutingModule { }

