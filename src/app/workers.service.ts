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

  addWorkers(workerToPush: Worker){
/*     this.workers.push(workerToPush);
    console.log(this.workers); */
    this.http.post(this.URL,workerToPush).subscribe( test => {console.log});
  }

  getWorkers(): Observable<Worker[]>{
    return this.http.get<Worker[]>(this.URL);
  }
  getWorker(id: string){
    return this.getWorkers().pipe(map((products: Worker[]) => products.find(p => p._id.$oid === id)));
  }

/*   getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  } */
  constructor(private http: HttpClient) { }
}
