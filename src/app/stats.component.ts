import { Component, SimpleChanges } from '@angular/core';
import { StatsService } from './stats.service';
import { Router } from '@angular/router';

@Component({
  //selector: 'mw-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  statistics;

  constructor(private statsService:StatsService,
    private router: Router) {
  }

  ngOnInit() {
    this.statsService.get().subscribe((data) => {
      this.statistics = data;
      console.log(data);
    });
  }

}