import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  nationality: string;
  nationalities = ["English","Spanish","Polish","German"];
  constructor() { }

  ngOnInit() {
  }

}
