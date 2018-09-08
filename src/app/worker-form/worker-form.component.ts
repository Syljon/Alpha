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
  model: Worker = { workerId: this.workersService.getWorkersLength()+1,firstName: "", lastName: "", nationality:""};
  nationalities = ["English","Spanish","Polish","German","Other"];

  onSubmit(){
    console.log("Submit", this.model)
    this.workersService.addWorkers(this.model);
    this.submited = true;
  }
  addAnother(){
    this.submited = false;
    this.model = { workerId: this.workersService.getWorkersLength()+1,firstName: "", lastName: "", nationality:""};
  }
  constructor(private workersService:WorkersService) { 
    console.log("constructor");
    
  }
  
  ngOnInit() {
    console.log("ngOnInit");
  }

}
