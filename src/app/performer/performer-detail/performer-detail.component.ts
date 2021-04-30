import { Component, OnInit, Input } from '@angular/core';
import { Performer } from '../performer';

@Component({
  selector: 'app-performer-detail',
  templateUrl: './performer-detail.component.html',
  styleUrls: ['./performer-detail.component.css']
})
export class PerformerDetailComponent implements OnInit {

  @Input() performerDetail: Performer;

  constructor() { }

  ngOnInit() {
    console.log(this.performerDetail.id);
  }

}
