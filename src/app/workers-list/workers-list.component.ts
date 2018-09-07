import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker.class';
import { WorkersService } from '../workers.service';
@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  workerslist: Worker[];
  constructor(private workersService: WorkersService) { 
    this.workerslist = this.workersService.getWorkers();
  }

  ngOnInit() {
  }

}
