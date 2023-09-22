import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHomeComponent } from './tasks/task-home/task-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch:'full'},
  {path:'tasks', component:TaskHomeComponent},
  {path:'create', component:TaskHomeComponent},
  {path:'tasks/:id', component:TaskHomeComponent},
  { path: "**", redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
