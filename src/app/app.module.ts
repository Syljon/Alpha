import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    WorkerFormComponent,
    WelcomePageComponent,
    WorkerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomePageComponent},
      {path:'employee-list', component: WorkersListComponent},
      {path: 'employee-form', component: WorkerFormComponent},
      {path: 'detail/:id', component: WorkerDetailComponent},
      {path:'**',redirectTo:"/welcome",pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
