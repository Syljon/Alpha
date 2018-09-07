import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker.class';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {
  submited: boolean = false;
  model: Worker = { firstName: "", lastName: "", nationality:""};
  nationalities = ["English","Spanish","Polish","German","Other"];

  Submit(){
    this.workersService.addWorkers(this.model);
    this.submited = true;
  }
  constructor(private workersService:WorkersService) { }
  
  ngOnInit() {
  }

}
