import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Album } from '../album';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {
  albumForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {

   }

  ngOnInit() {
    this.albumForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      releaseDate: ["", [Validators.required]],
      description: ["", [Validators.required]],
      genre: ["", [Validators.required]],
      recordLabel: ["", [Validators.required]]
    });
  }

  createAlbum(newAlbum: Album){
    //-----------------------------------------------------------------
    // this.clientService.createClient(newClient).subscribe(client => {
    //   this.clientes.push(client);
    //  this.showSuccess(newClient);
    // });
    //------------------------------------------------------------------
    this.showSuccess(newAlbum);
    this.albumForm.reset();
  }

  showSuccess(album: Album){
    this.toastr.success(
      'Creado exitosamente!',
      `Album ${album.name}`,
      { "progressBar": true, timeOut: 4000 }
    )
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.albumForm.reset();
  }

}
