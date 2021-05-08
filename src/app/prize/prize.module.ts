import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizeListarComponent } from './prize-listar/prize-listar.component';
import { PrizeDetailComponent } from './prize-detail/prize-detail.component';
import { PrizeRoutingModule } from './prize-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PrizeRoutingModule

  ],
  declarations: [PrizeListarComponent, PrizeDetailComponent],
  exports: [PrizeListarComponent],
})
export class PrizeModule { }
