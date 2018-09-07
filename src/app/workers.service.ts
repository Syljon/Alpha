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
      date: "12-06-2014",
      phoneNumber: "123123123",
      pesel: "11111111111"
    },
    {
      workerId: 3,
      firstName: "Tomasz",
      lastName: "Wycik",
      date: "10-06-2014",
      phoneNumber: "111222333",
      pesel: "11111124111"
    },
    {
      workerId: 10,
      firstName: "Rober",
      lastName: "Roman",
      date: "06-06-2014",
      phoneNumber: "999666555",
      pesel: "11223345678"
    },
  ];

  getWorkers(){
    return this.workers;
  }
  constructor() { }
}
