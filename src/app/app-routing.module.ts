import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListarComponent } from './album/album-listar/album-listar.component';
import { PerformerListarComponent } from './performer/performer-listar/performer-listar.component';
import { PrizeListarComponent } from './prize/prize-listar/prize-listar.component';

const routes: Routes = [
  { path: 'albums/list', component: AlbumListarComponent } ,
  { path: 'performers/list', component: PerformerListarComponent },
  { path: 'prizes/list', component: PrizeListarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




