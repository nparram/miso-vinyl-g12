import { Component, OnInit } from '@angular/core';
import { Performer } from './performer';
import { dataPerformers } from './dataPerformers';
@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.css']
})
export class PerformerComponent implements OnInit {

  constructor() { }
  performers: Array<Performer>;
  getPerformerList(): Array<Performer> {
    return dataPerformers;
  }

  ngOnInit() {
    this.performers = this.getPerformerList();
  }

}

