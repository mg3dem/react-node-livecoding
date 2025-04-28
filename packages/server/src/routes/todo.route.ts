import { Router } from 'express';

import {
  getAllTodos,
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todo.controller';

const router = Router();

router.get('/', getAllTodos);
router.post('/', addTodo);
router.get('/:id', getTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
