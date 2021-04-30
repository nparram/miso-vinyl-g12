import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizeListarComponent } from './prize-listar/prize-listar.component';
import {HttpClientModule} from '@angular/common/http';
import { PrizeDetailComponent } from './prize-detail/prize-detail.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [PrizeListarComponent, PrizeDetailComponent],
  exports: [PrizeListarComponent],
})
export class PrizeModule { }
