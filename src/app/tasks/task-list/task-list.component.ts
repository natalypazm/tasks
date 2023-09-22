import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(
    private taskservice: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.taskservice.getTasks();
  }

  doneTask(task: Task){
    event?.stopPropagation();
    task.isDone = !task.isDone;
    this.taskservice.updateTask(task.id, task).subscribe(response => console.log(response));
  }

  updateTask(id: string){
    this.router.navigate(['/tasks', id]);
  }
}
