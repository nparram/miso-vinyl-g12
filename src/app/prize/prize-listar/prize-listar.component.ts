import { Component, OnInit } from '@angular/core';
import { Prize } from '../prize';
import { PrizeService } from '../prize.service';

@Component({
  selector: 'app-prize-listar',
  templateUrl: './prize-listar.component.html',
  styleUrls: ['./prize-listar.component.css']
})

export class PrizeListarComponent implements OnInit {

  constructor(private prizeService: PrizeService) { }

  prizes: Array<Prize>;

  getPrizes(): void {
    this.prizeService.getPrizes()
      .subscribe(prizes => {
        this.prizes = prizes;
      });
  }

  ngOnInit() {
    this.getPrizes();
  }

}


