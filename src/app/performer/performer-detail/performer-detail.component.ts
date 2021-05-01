import { Component, OnInit, Input } from '@angular/core';
import { PerformerDetail } from '../performerDetail';

@Component({
  selector: 'app-performer-detail',
  templateUrl: './performer-detail.component.html',
  styleUrls: ['./performer-detail.component.css']
})
export class PerformerDetailComponent implements OnInit {

  @Input() performerDetail: PerformerDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.performerDetail.id);
  }


}
