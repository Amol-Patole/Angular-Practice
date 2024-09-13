import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;

}

@Component({
  selector: 'app-task-basic',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-basic.component.html',
  styleUrl: './task-basic.component.css'
})
export class TaskBasicComponent {
isAddingtask = false;
@Input() task!:Task;
@Output() complete= new EventEmitter<string >();

onCompleteTask()
{
  this.complete.emit(this.task.id)
}
onstartaddtask()
{
this.isAddingtask=true;
}


}
