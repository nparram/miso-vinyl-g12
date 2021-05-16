import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Performer } from '../performer';
import { PerformerService } from '../performer.service';

@Component({
  selector: 'app-performer-create',
  templateUrl: './performer-create.component.html',
  styleUrls: ['./performer-create.component.css']
})
export class PerformerCreateComponent implements OnInit {

  performerForm: FormGroup;
  performers: Performer []

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private performerService : PerformerService
  ) {

   }

  ngOnInit() {
    this.performerForm = this.formBuilder.group({

      name: ["", [Validators.required]],
      image : ["", [Validators.required]],
      description: ["", [Validators.required]],
      birthDate: ["", [Validators.required]]


    });


}


  createPerformer(newPerformer: Performer){
    //-----------------------------------------------------------------
     this.performerService.createPerformer(newPerformer).subscribe(performer => {
     this.performers.push(performer);
     this.showSuccess(newPerformer);
     });
    //------------------------------------------------------------------
    this.showSuccess(newPerformer);
    this.performerForm.reset();
  }

  showSuccess(performer: Performer){
    this.toastr.success(
      'Creado exitosamente!',
      `Performer ${performer.name}`,
      { "progressBar": true, timeOut: 4000 }
    )
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.performerForm.reset();
  }

}
