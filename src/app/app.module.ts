import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskHomeComponent } from './tasks/task-home/task-home.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskHomeComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
