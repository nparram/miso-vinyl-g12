import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListarComponent } from './performer-listar/performer-listar.component';
import {HttpClientModule} from '@angular/common/http';
import { PerformerDetailComponent } from './performer-detail/performer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PerformerListarComponent,PerformerDetailComponent],
  exports: [PerformerListarComponent],
})
export class PerformerModule { }
