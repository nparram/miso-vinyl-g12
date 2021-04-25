import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListarComponent } from './performer-listar/performer-listar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PerformerListarComponent],
  exports: [PerformerListarComponent],
})
export class PerformerModule { }
