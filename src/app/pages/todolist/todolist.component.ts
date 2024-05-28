import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonBudgetComponent } from '../../components/button-budget/button-budget.component';

interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonBudgetComponent],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  newTaskDescription: string = '';
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];

  addTask() {
    if (this.newTaskDescription.trim() !== '') {
      const task: Task = { description: this.newTaskDescription, completed: false };
      this.pendingTasks.push(task);
      this.newTaskDescription = '';
    }
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    if (task.completed) {
      this.pendingTasks = this.pendingTasks.filter(t => t !== task);
      this.completedTasks.push(task);
    } else {
      this.completedTasks = this.completedTasks.filter(t => t !== task);
      this.pendingTasks.push(task);
    }
  }

  removeTask(task: Task) {
    if (task.completed) {
      this.completedTasks = this.completedTasks.filter(t => t !== task);
    } else {
      this.pendingTasks = this.pendingTasks.filter(t => t !== task);
    }
  }
}
