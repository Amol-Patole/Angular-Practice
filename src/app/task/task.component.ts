import { Component, Input } from '@angular/core';
import { TaskBasicComponent } from "./task-basic/task-basic.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type  NewTaskData } from './new-task/new-task.model';
import {TaskService} from './task.services';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskBasicComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required : true})userId!:string;
  @Input({ required : true }) name!:string;
  // @Input({ required : true }) avatar!:string;
  isAddingtask = false

  constructor(private tastservice:TaskService){}
  

  // get imageNewPath(){
  //   return 'assets/users/' + this.avatar;
  // }
  
  get selecteduserTask()
  {    return
      // Getting the data from service module
      // return this.tastservice.getUserTask(this.userId)
    // return this.task.filter((task)=> task.userId===this.userId);
  }
  onCompletetask(id:string)
  {
  // this.task=this.task.filter((task)=> task.id!==id)
  }
  onAddcomplete()
  {
    // this.isAddingtask=true;
  }
   
  onCancelAddTask()
  {
    this.isAddingtask=false;
  }
     

//   onAddTask(taskData:NewTaskData)
//   {
//     this.task.unshift(
//       {
//         id: new Date().getTime().toString(),
//         userId:this.userId,
//         title:taskData.title,
//         summary:taskData.summary,
//         dueDate:taskData.date

//       }
//     )
//     this.isAddingtask=false;
//   }
}
