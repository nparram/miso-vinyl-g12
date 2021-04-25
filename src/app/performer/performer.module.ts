import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListarComponent } from './performer-listar/performer-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerformerListarComponent],
  exports: [PerformerListarComponent],
})
export class PerformerModule { }
