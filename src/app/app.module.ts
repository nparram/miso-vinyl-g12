import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModule } from './album/album.module';
import { AlbumListarComponent } from './album/album-listar/album-listar.component';
import { AlbumComponent } from './album/album.component';

import { PrizeModule } from './prize/prize.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumModule,
    PrizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
