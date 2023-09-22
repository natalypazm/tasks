import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  public tasks: Task[] = [];
  task!: Task;
  myform: FormGroup;
  isEditing: boolean = false;
  @ViewChild('content', { static: true }) contentTemplate!: TemplateRef<any>;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
    ){
      this.myform = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam !== null){
      const taskId = idParam;
      this.taskService.getTask(taskId).subscribe((task: Task) => {
        if(taskId){
          this.isEditing = true;
          this.myform.patchValue({
            title: task.title,
            description: task.description,
            id: task.id
          })
          this.offcanvasService.open(this.contentTemplate, { position: 'end', backdrop: false});
        }
      })
    }
  }

  createOrUpdateTask(){
    if(this.myform.valid){
      const formData = this.myform.value;
      if(this.isEditing){
        const id = this.route.snapshot.paramMap.get('id');
        this.taskService.updateTask(id!,formData).subscribe( newTask  => {
          const index = this.tasks.findIndex(task => task.id === newTask.id);
          this.tasks[index] = newTask;
        })
      } else{
        this.taskService.createTask(formData).subscribe((task:Task) => {
          this.tasks.push(task);
        });
      }
      this.myform.reset();
      this.dismiss()
    }
  }

  deleteTask(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.taskService.deleteTask(id).subscribe(p => {
        const index = this.tasks.findIndex(aa => aa.id === id);
        this.tasks.splice(index, 1);
      })
      this.dismiss()
    }
  }

  buttonCreateTask(content: TemplateRef<any>) {
    this.router.navigateByUrl('create');
		this.offcanvasService.open(content, { position: 'end', backdrop: false});
	}

  get isInvalid() {
    return this.myform.get('title')?.hasError('required') && this.myform.get('title')?.touched && this.myform.get('title')?.dirty;
  }

  dismiss(){
    this.router.navigateByUrl('/');
    this.offcanvasService.dismiss();
    this.myform.reset();
  }

}
