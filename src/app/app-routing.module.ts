import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformerListarComponent } from './performer/performer-listar/performer-listar.component';
import { PrizeRoutingModule } from './prize/prize-routing.module';
import { AlbumRoutes } from './album/album.routing';

const routes: Routes = [
  { path: 'performers/list', component: PerformerListarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, AlbumRoutes, PrizeRoutingModule]
})
export class AppRoutingModule { }




