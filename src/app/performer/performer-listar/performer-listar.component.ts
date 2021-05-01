import { Component, OnInit } from '@angular/core';
import { Performer } from '../performer';
import { PerformerService } from '../performer.service';
import { PerformerDetail } from '../performerDetail';

@Component({
  selector: 'app-performer-listar',
  templateUrl: './performer-listar.component.html',
  styleUrls: ['./performer-listar.component.css']
})
export class PerformerListarComponent implements OnInit {
  constructor(private performerService: PerformerService) { }

  performers: Array<PerformerDetail>;
  selectedPerformer: PerformerDetail;
  selected = false;

  getPerformers(): void {
    this.performerService.getPerformer()
      .subscribe(performers => {
        this.performers = performers;
      });
  }

  onSelected(b: PerformerDetail): void {
    this.selected = true;
    this.selectedPerformer = b;
    }

  ngOnInit() {
    this.getPerformers();
  }

}



