import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Task {
  taskName: string;
  taskLabel: string;
  taskCheckList?: number;
  taskComment?: string[];
  taskVotes?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  addCardClicked = false;
  submitted = false;


  constructor(
    public fb: FormBuilder,
  ) { }
  ngOnInit() { }
  taskStages: any = [{ key: 'Todo', value: 'todo' }, { key: 'Development', value: 'development' }, { key: 'Testing', value: 'testing' }, { key: 'Done', value: 'done' }];
  todo: Task[] = [{ taskName: 'Helpdesk Call AA999', taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskVotes: 1, taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP' }];
  development: Task[] = [{ taskName: 'Helpdesk Call AA999', taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskVotes: 1, taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP' }];
  testing: Task[] = [{ taskName: 'Helpdesk Call AA999', taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskVotes: 1, taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP' }];
  done: Task[] = [{ taskName: 'Helpdesk Call AA999', taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskVotes: 1, taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP', taskCheckList: 3 }, { taskName: 'Helpdesk Call AA999', taskComment: ['Added card', 'added task'], taskLabel: 'CP' }];

  addCardForm: FormGroup = this.fb.group({
    taskName: ['', [Validators.required, Validators.maxLength(10)]],
    taskLabel: ['', [Validators.required, Validators.maxLength(10)]],
    taskStage: ['', Validators.required],
    taskComment: ['', Validators.required]
  })
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,

      );

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  closeSidebar(event: boolean) {
    console.log(event);
  }
  addCardClick() {
    this.addCardClicked = true;
  }
  onAddingCard() {
    this.submitted = true;
    this.addCardForm.value.taskStage = this.addCardForm.value.taskStage.split(" ").pop();
    if (this.addCardForm.value.taskStage == 'todo') {
      this.todo.push(this.addCardForm.value);
    } else if (this.addCardForm.value.taskStage == 'development') {
      this.development.push(this.addCardForm.value);
    } else if (this.addCardForm.value.taskStage == 'testing') {
      this.testing.push(this.addCardForm.value);
    } else if (this.addCardForm.value.taskStage == 'done') {
      this.done.push(this.addCardForm.value);
    }
    this.addCardClicked = false;
  }
  get myForm() {
    return this.addCardForm.controls;
  }

  changeStage(e: any) {
    this.addCardForm.get('taskStage')?.setValue(e.target.value, {
      onlySelf: true
    })
  }
  OnCloseButtonClick() {
    this.addCardClicked = false;
    console.log("OPP");

  }
}
