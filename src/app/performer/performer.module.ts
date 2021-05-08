import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListarComponent } from './performer-listar/performer-listar.component';
import { PerformerRoutingModule } from './performer-routing.module';
import { PerformerDetailComponent } from './performer-detail/performer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PerformerRoutingModule
  ],
  declarations: [PerformerListarComponent,PerformerDetailComponent],
  exports: [PerformerListarComponent],
})
export class PerformerModule { }











