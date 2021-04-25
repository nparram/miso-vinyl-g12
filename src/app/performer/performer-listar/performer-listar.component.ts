import { Component, OnInit } from '@angular/core';
import { Performer } from '../performer';
import { PerformerService } from '../performer.service';

@Component({
  selector: 'app-performer-listar',
  templateUrl: './performer-listar.component.html',
  styleUrls: ['./performer-listar.component.scss']
})
export class PerformerListarComponent implements OnInit {
  constructor(private performerService: PerformerService) { }

  performers: Array<Performer>;

  getPerformers(): void {
    this.performerService.getPerformer()
      .subscribe(performers => {
        this.performers = performers;
      });
  }
  ngOnInit() {
    this.getPerformers();
  }

}



