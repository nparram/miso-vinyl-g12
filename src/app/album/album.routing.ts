import { Routes, RouterModule } from '@angular/router';
import { AlbumListarComponent } from './album-listar/album-listar.component'
import { AlbumDetailComponent } from './album-detail/album-detail.component'

const routes: Routes = [
  {
    path: 'albumes',
    children: [
      {
        path: 'list',
        component: AlbumListarComponent
      },
      {
        path: ':id',
        component: AlbumDetailComponent
      }
    ]
  },
];

export const AlbumRoutes = RouterModule.forChild(routes);
