import { useMutation } from '@tanstack/react-query';
import { Checkbox } from 'antd';

import { Todo } from '../../../interfaces/Todo';
import { api } from '../../../services/api';

interface TodoCheckProps {
  todo: Todo;
}

export const TodoCheck = ({ todo }: TodoCheckProps) => {
  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      return await api.patch<Todo>(`/todos/${id}`, {
        completedAt: todo.completedAt ? null : new Date(),
      });
    },
  });

  return <Checkbox type="primary" checked={!!todo.completedAt} onClick={() => mutate(todo.id)} />;
};
