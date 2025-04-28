import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Input } from 'antd';
import { useState } from 'react';

import { Todo } from '../../../interfaces/Todo';
import { api } from '../../../services/api';

export const AddTodo = () => {
  const [text] = useState('');
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (text: string) => {
      return await api.post<Todo>(`/todos`, {
        text,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <Input.Search
      loading={isPending}
      value={text}
      size="large"
      enterButton="Add Todo"
      placeholder="Add a new todo"
      onSearch={() => mutate(text)}
    />
  );
};
