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
  model: Worker = {firstName: "", lastName: "", nationality:"", hireDate: "",phoneNumber: "",pesel:"" , isFullTime: "Full time"};
  nationalities = ["English","Spanish","Polish","German","Other"];

  onSubmit(){
    console.log("Submit", this.model)
    this.workersService.postWorkers(this.model);
    this.submited = true;
  }
  addAnother(){
    this.submited = false;
    this.model = {firstName: "", lastName: "", nationality:"", hireDate: "", phoneNumber: "",pesel: "", isFullTime: "Full time"};
  }
  constructor(private workersService:WorkersService) { 
  }

  ngOnInit() {
  }
}
