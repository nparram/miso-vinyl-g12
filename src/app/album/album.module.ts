import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    AlbumComponent,
    AlbumListarComponent
  ],
  exports: [
    AlbumComponent,
    AlbumListarComponent
  ]
})
export class AlbumModule { }
