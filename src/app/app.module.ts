import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    WorkerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
