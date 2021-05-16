import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizeListarComponent } from './prize-listar/prize-listar.component';
import { PrizeDetailComponent } from './prize-detail/prize-detail.component';
import { PrizeRoutingModule } from './prize-routing.module';
import { PrizeCreateComponent } from './prize-create/prize-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PrizeComponent } from './prize.component';


@NgModule({
  imports: [
    CommonModule,
    PrizeRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,


  ],
  declarations: [PrizeListarComponent, PrizeDetailComponent, PrizeCreateComponent, PrizeComponent],
  exports: [PrizeListarComponent, PrizeCreateComponent, PrizeComponent],
})
export class PrizeModule { }

