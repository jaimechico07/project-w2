// shared/models.ts
export interface Task {
  description: string;
  completed: boolean;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string | null;
  photoURL?: string | null;
}
