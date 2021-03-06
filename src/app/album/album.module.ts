import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
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
    AlbumDetailComponent,
    AlbumCreateComponent
  ]
})
export class AlbumModule { }
