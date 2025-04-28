import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from 'antd';

import { Todo } from '../../../interfaces/Todo';
import { api } from '../../../services/api';

interface TodoActionProps {
  todo: Todo;
}

export const TodoAction = ({ todo }: TodoActionProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      return await api.delete(`/todos/${id}`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  return (
    <Button type="primary" size="small" danger onClick={() => mutate(todo.id)}>
      Delete
    </Button>
  );
};
