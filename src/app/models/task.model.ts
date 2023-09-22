export interface Task{
  id: string;
  title: string;
  description: string;
  isDone: boolean
}

export interface CreateTaskDTO extends Omit<Task, 'id'>{}

export interface UpdateTaskDTO extends Partial<CreateTaskDTO>{}
