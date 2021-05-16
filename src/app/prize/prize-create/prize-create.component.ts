import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Prize } from '../prize';
import { PrizeService } from '../prize.service';

@Component({
  selector: 'app-prize-create',
  templateUrl: './prize-create.component.html',
  styleUrls: ['./prize-create.component.css']
})
export class PrizeCreateComponent implements OnInit {

  prizeForm: FormGroup;
  prizes: Prize[];

  constructor(
    private formBuilder: FormBuilder,
    private prizeService: PrizeService,
    private toastr: ToastrService
  ) {

   }

  ngOnInit() {
    this.prizeForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      organization: ["", [Validators.required]],
    });
  }

  createPrize(newPrize: Prize){
    //-----------------------------------------------------------------
     this.prizeService.createPrize(newPrize).subscribe(prize => {
     this.prizes.push(prize);
     this.showSuccess(newPrize);
     });
    //------------------------------------------------------------------
    this.showSuccess(newPrize);
    this.prizeForm.reset();
  }

  showSuccess(prize: Prize){
    this.toastr.success(
      'Creado exitosamente!',
      `Prize ${prize.name}`,
      { "progressBar": true, timeOut: 4000 }
    )
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.prizeForm.reset();
  }


}



