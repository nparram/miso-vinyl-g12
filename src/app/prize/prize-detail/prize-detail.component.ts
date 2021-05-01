import { Component, OnInit, Input } from '@angular/core';
import { PrizeDetail } from '../prizeDetail';

@Component({
  selector: 'app-prize-detail',
  templateUrl: './prize-detail.component.html',
  styleUrls: ['./prize-detail.component.css']
})
export class PrizeDetailComponent implements OnInit {

  @Input() prizeDetail: PrizeDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.prizeDetail.id);
  }

  strToDate(premiationDate: string): Date {
    console.log(premiationDate);
    const dateNoTime: string[] = premiationDate.split('T');
    return new Date(dateNoTime[0]);
  }
}
