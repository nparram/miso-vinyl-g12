import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizeListarComponent } from './prize-listar/prize-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrizeListarComponent],
  exports: [PrizeListarComponent],
})
export class PrizeModule { }
