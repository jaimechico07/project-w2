import { Injectable } from '@angular/core';
import { Database, ref, set, get, push } from '@angular/fire/database';
import { Task } from '../../../shared/firebase-models';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private db: Database) {}

  async getUserTasks(userId: string): Promise<Task[]> {
    try {
      const tasksRef = ref(this.db, `tasks/${userId}`);
      const snapshot = await get(tasksRef);
      const data = snapshot.val();
      return data ? Object.values(data) : [];
    } catch (error) {
      console.error("Error fetching user tasks:", error);
      return [];
    }
  }

  async addTask(userId: string, task: Task): Promise<void> {
    try {
      const taskListRef = ref(this.db, `tasks/${userId}`);
      const newTaskRef = push(taskListRef);
      await set(newTaskRef, task);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  async updateTasks(userId: string, tasks: Task[]): Promise<void> {
    try {
      const taskListRef = ref(this.db, `tasks/${userId}`);
      await set(taskListRef, tasks);
    } catch (error) {
      console.error("Error updating tasks:", error);
    }
  }
}
