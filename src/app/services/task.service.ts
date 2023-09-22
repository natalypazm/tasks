import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateTaskDTO, Task, UpdateTaskDTO } from '../models/task.model';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = `${environment.api_url}/tasks`

  constructor(
    private http: HttpClient
  ) {}

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.api);
  }

  getTask(id:string):Observable<Task>{
    return this.http.get<Task>(`${this.api}/${id}`);
  }

  createTask(dto: CreateTaskDTO):Observable<Task>{
    return this.http.post<Task>(this.api, dto);
  }

  updateTask(id: string, dto: UpdateTaskDTO):Observable<Task>{
    return this.http.put<Task>(`${this.api}/${id}`, dto);
  }

  deleteTask(id:string):Observable<boolean>{
    return this.http.delete<boolean>(`${this.api}/${id}`)
  }
}
