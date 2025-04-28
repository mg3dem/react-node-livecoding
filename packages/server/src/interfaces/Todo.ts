export interface Todo {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date | null;
  deletedAt?: Date | null;
  text: string;
}
