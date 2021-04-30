import { Component, OnInit, Input } from '@angular/core';
import { Prize } from '../prize';

@Component({
  selector: 'app-prize-detail',
  templateUrl: './prize-detail.component.html',
  styleUrls: ['./prize-detail.component.css']
})
export class PrizeDetailComponent implements OnInit {

  @Input() prizeDetail: Prize;

  constructor() { }

  ngOnInit() {
    console.log(this.prizeDetail.id);
  }



}
