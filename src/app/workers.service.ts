import { Injectable } from '@angular/core';
import { Worker } from './worker.class';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  workers: Worker[] = [
    {
      workerId: 1,
      firstName: "Adam",
      lastName: "Kowalski",
      hireDate: {year: 2018, month: 9, day: 21},
      phoneNumber: "123123123",
      pesel: "11111111111",
      nationality: "English",
      isFullTime: "1/4"
    },
    {
      workerId: 2,
      firstName: "Tomasz",
      lastName: "Wycik",
      hireDate: { year: 2018, month: 12, day: 24 },
      phoneNumber: "111222333",
      pesel: "11111124111",
      nationality: "Polish",
      isFullTime: "Full"
    },
    {
      workerId: 3,
      firstName: "Rober",
      lastName: "Roman",
      hireDate: { year: 2022, month: 10, day: 10 },
      phoneNumber: "999666555",
      pesel: "11223345678",
      nationality: "Spanish",
      isFullTime: "1/2"
    },
  ];
  addWorkers(workerToPush: Worker){
    this.workers.push(workerToPush);
    console.log(this.workers);
  }
  getWorkersLength(){
    return this.workers.length
  }
  getWorkers(){
    return this.workers;
  }
  getWorker(id: number){
    return this.workers.find(worker => worker.workerId === id);
  }
  constructor() { }
}
