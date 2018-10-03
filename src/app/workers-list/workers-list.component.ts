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
  filterworkerlist:Worker[];
  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value){
    this._listFilter = value;
    this.filterworkerlist =  this.listFilter
    ? this._Filter(this.listFilter)
    : this.workerslist;
  }
  _Filter(filter: string){
    filter = filter.toLocaleLowerCase();
    return this.workerslist.filter((worker: Worker) => {return worker.lastName.toLocaleLowerCase().indexOf(filter) !== -1})
  }
  remove(_worker: Worker){
    this.workersService.removeWorker(_worker).subscribe();
  }
  constructor(private workersService: WorkersService) { 
    this.workersService.getWorkers().subscribe(workers => {this.workerslist = workers; this.filterworkerlist = workers});
  }

  ngOnInit() {
  }

}
