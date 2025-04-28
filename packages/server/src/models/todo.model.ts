import { Todo } from '../interfaces/Todo';

export const todos: Todo[] = [
  {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    text: 'First todo',
  },
  {
    id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    text: 'Second todo',
  },
  {
    id: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
    text: 'Completed todo',
  },
  {
    id: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
    text: 'Deleted todo',
  },
];
