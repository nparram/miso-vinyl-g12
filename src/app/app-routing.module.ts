import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformerListarComponent } from './performer/performer-listar/performer-listar.component';
import { PrizeListarComponent } from './prize/prize-listar/prize-listar.component';
import { AlbumRoutes } from './album/album.routing';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, AlbumRoutes]
})
export class AppRoutingModule { }




