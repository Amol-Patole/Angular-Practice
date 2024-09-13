import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredtitle='';
  enteredsummary='';
  enteredduedate='';

  @Output() cancel = new EventEmitter<void>();
  @Output() add=new EventEmitter<NewTaskData>();

  onCancel()
  {
    this.cancel.emit()
  }
  onsubmit()
  { 
    this.add.emit(
      {title:this.enteredtitle,
      summary:this.enteredsummary,
      date:this.enteredduedate,
    });

  }

}
