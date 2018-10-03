import { Injectable } from '@angular/core';
import { Worker } from './worker.class';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private URL = 'https://api.mlab.com/api/1/databases/angular_db/collections/workers?apiKey=CuW8EXy0vtOYxDKFZEaVxZesKhYISLOC';
  private dURL = 'https://api.mlab.com/api/1/databases/angular_db/collections/workers/';
  private key = '?apiKey=CuW8EXy0vtOYxDKFZEaVxZesKhYISLOC';
  postWorkers(workerToPush: Worker){
    this.http.post(this.URL,workerToPush).subscribe( test => {console.log});
  }

  getWorkers(): Observable<Worker[]>{
    return this.http.get<Worker[]>(this.URL);
  }
  getWorker(id: string){
    return this.getWorkers().pipe(map((products: Worker[]) => products.find(p => p._id.$oid === id)));
  }

  updateWorker(_worker: Worker):Observable<any>{
    return this.http.put(this.URL,_worker);
  }

  removeWorker(_worker: Worker):Observable<Worker>{
    const url = `${this.dURL}/${_worker._id.$oid}${this.key}`;
    console.log(`${this.dURL}/${_worker._id.$oid}${this.key}`);
    return this.http.delete<Worker>(url);
  }
  constructor(private http: HttpClient) { }
}
