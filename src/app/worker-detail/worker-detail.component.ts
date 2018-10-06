import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { WorkersService } from '../workers.service';
import { Worker } from '../worker.class';
@Component({
  selector: "app-worker-detail",
  templateUrl: "./worker-detail.component.html",
  styleUrls: ["./worker-detail.component.css"]
})
export class WorkerDetailComponent implements OnInit {
  
  employee : Worker;
  goBack(): void {
    this.location.back();
  }

  save(){
    this.workersService.updateWorker(this.employee).subscribe(()=>this.goBack());
  }

  remove(){
    this.workersService.removeWorker(this.employee).subscribe(()=>this.goBack());
  }
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workersService:WorkersService
  ) {}

  ngOnInit() {
    const idSnap = this.route.snapshot.paramMap.get('id');
    if (idSnap) {
      this.getEmp(idSnap);
    }

  }
  getEmp(id: string){
    this.workersService.getWorker(id).subscribe(emp => this.employee = emp);
  }
}
