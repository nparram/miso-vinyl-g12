import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() albumDetail: Album;
  @Input() id: number;

  constructor() { console.log(this.id); }

  ngOnInit() {
    console.log(this.id);
  }

}
