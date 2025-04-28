import { TableColumnsType, Tag, Typography } from 'antd';

import { TodoAction } from './components/TodoAction';
import { TodoCheck } from './components/TodoCheck';
import { Todo } from '../../interfaces/Todo';

const { Text } = Typography;

export const todoColumns: TableColumnsType<Todo> = [
  {
    title: '',
    key: 'id',
    render: (_, todo) => <TodoCheck todo={todo} />,
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (id: number) => <Text>{id}</Text>,
  },
  {
    title: 'Todo',
    dataIndex: 'text',
    key: 'text',
    render: (text: string) => <Text>{text}</Text>,
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt: Date) => <Text>{new Date(createdAt).toLocaleString()}</Text>,
  },
  {
    title: 'Completed',
    dataIndex: 'completedAt',
    key: 'completedAt',
    render: (completedAt: Date | null) =>
      completedAt ? <Tag color="success">Yes</Tag> : <Tag color="default">No</Tag>,
  },
  {
    title: 'Actions',
    key: 'id',
    render: (_, todo) => {
      return <TodoAction todo={todo} />;
    },
  },
];
