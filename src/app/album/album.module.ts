import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AlbumComponent,
    AlbumListarComponent,
    AlbumDetailComponent,
    AlbumCreateComponent
  ],
  exports: [
    AlbumComponent,
    AlbumListarComponent,
    AlbumCreateComponent
  ]
})
export class AlbumModule { }
