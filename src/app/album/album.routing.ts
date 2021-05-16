import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album.component';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumComponent,
    children: [
      {
        path: 'list',
        component: AlbumListarComponent,
        outlet: 'bottom'
      },
      {
        path: 'add',
        component: AlbumCreateComponent
      },
      {
        path: ':id',
        component: AlbumDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AlbumRoutes {}
