import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumListarComponent } from './album-listar/album-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlbumComponent,
    AlbumListarComponent
  ],
  exports: [AlbumListarComponent]
})
export class AlbumModule { }
