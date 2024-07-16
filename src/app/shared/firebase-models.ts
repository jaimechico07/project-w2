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

export interface Receta {
  id?: string;
  titulo: string;
  categoria: string;
  tiempo: string;
  personas: number;
  ingredientes: string[];
  preparacion: string;
  imagen: string | ArrayBuffer | null;
  eliminada?: boolean;
}

