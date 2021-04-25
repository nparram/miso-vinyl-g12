import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizeListarComponent } from './prize-listar/prize-listar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [PrizeListarComponent],
  exports: [PrizeListarComponent],
})
export class PrizeModule { }
