import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';

@Component({
  selector: 'mw-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent {
  constructor(
    private databaseService:DatabaseService,
    private router: Router) {}

  onRecreateDatabase() {
    this.databaseService.recreateDatabase();
    this.router.navigate([""]);
  }

  onRecreateDatabaseSeed() {
    this.databaseService.recreateDatabaseSeed();
    this.router.navigate([""]);
  }

}