import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListarComponent } from './performer-listar/performer-listar.component';
import { PerformerRoutingModule } from './performer-routing.module';
import { PerformerDetailComponent } from './performer-detail/performer-detail.component';
import { PerformerCreateComponent } from './performer-create/performer-create.component';
import { PerformerComponent} from './performer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PerformerRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [PerformerComponent,PerformerListarComponent,PerformerDetailComponent,PerformerCreateComponent],
  exports: [PerformerComponent,PerformerListarComponent,PerformerDetailComponent,PerformerCreateComponent],
})
export class PerformerModule { }











