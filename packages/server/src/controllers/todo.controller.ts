import { Request, Response } from 'express';

import { Todo } from '../interfaces/Todo';
import { todos } from '../models/todo.model';

export const getAllTodos = (req: Request, res: Response) => {
  res.status(200).json(todos);
};

export const getTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const addTodo = (req: Request, res: Response) => {
  const { text } = req.body;
  const newTodo: Todo = {
    id: todos.length + 1,
    text,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { text, completedAt } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.text = text || todo.text;
    todo.updatedAt = new Date();

    if (completedAt !== undefined) {
      todo.completedAt = completedAt ? new Date(completedAt) : null;
    }

    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((t) => t.id === id);

  if (index !== -1) {
    todos[index].deletedAt = new Date(); // Soft delete
    res.status(200).json(todos[index]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};
