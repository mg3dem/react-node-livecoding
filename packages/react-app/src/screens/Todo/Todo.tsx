import { useQuery } from '@tanstack/react-query';
import { Row, Col, Typography, Table, Divider } from 'antd';

import { AddTodo } from './components/AddTodo';
import { todoColumns } from './todoColumns';
import { Todo } from '../../interfaces/Todo';
import { api } from '../../services/api';

const { Title } = Typography;

export const TodoScreen = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const { data } = await api.get<Todo[]>('/todos');
      return data;
    },
  });

  return (
    <Row justify="center">
      <Col span={24}>
        <Row align="middle" justify="space-between">
          <Title level={1}>Todos</Title>
          <AddTodo />
        </Row>
        <Divider />
        <Table
          rowKey="id"
          loading={isLoading}
          dataSource={data}
          columns={todoColumns}
          style={{ width: '100%' }}
        />
      </Col>
    </Row>
  );
};
