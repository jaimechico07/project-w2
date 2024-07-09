import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonBudgetComponent } from '../../components/button-budget/button-budget.component';
import { IconsModule } from '../../icons/icons.module';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { TodoService } from '../../auth/services/firebase/todo.service';
import { AuthService } from '../../auth/services/firebase/firebase-auth.services';
import { Task } from '../../shared/firebase-models';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonBudgetComponent,IconsModule,ErrorMessageComponent ],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  newTaskDescription: string = "";
  errorMessage: string = ""
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];
  userId: string | null = null;

  constructor(private authService: AuthService, private todoService: TodoService) {}

  ngOnInit(): void {
    this.authService.authInstance.onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
        this.loadTasks();
      }
    });
  }

  async loadTasks() {
    if (this.userId) {
      try {
        const tasks = await this.todoService.getUserTasks(this.userId);
        this.pendingTasks = tasks.filter(task => !task.completed);
        this.completedTasks = tasks.filter(task => task.completed);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    }
  }

  async addTask() {
    if (this.newTaskDescription.trim() !== '') {
      const task: Task = { description: this.newTaskDescription, completed: false };
      this.pendingTasks.push(task);
      this.newTaskDescription = '';
      this.errorMessage = '';
      await this.saveTasks();
    } else {
      this.errorMessage = '*Inserte una tarea';
    }
  }

  async toggleCompleted(task: Task) {
    task.completed = !task.completed;
    if (task.completed) {
      this.pendingTasks = this.pendingTasks.filter(t => t !== task);
      this.completedTasks.push(task);
    } else {
      this.completedTasks = this.completedTasks.filter(t => t !== task);
      this.pendingTasks.push(task);
    }
    await this.saveTasks();
  }

  async removeTask(task: Task) {
    if (task.completed) {
      this.completedTasks = this.completedTasks.filter(t => t !== task);
    } else {
      this.pendingTasks = this.pendingTasks.filter(t => t !== task);
    }
    await this.saveTasks();
  }

  async saveTasks() {
    if (this.userId) {
      const allTasks = [...this.pendingTasks, ...this.completedTasks];
      try {
        await this.todoService.updateTasks(this.userId, allTasks);
      } catch (error) {
        console.error("Error saving tasks:", error);
      }
    }
  }
}
