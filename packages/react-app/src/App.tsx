import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout, Typography } from 'antd';

import { appConfig } from './configs/app';
import { theme } from './configs/theme';
import { TodoScreen } from './screens/Todo/Todo';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ textAlign: 'center' }}>
            <Text strong style={{ color: 'white' }}>
              {appConfig.name}
            </Text>
          </Header>
          <Content style={{ padding: '24px 48px' }}>
            <TodoScreen />
          </Content>
          <Footer style={{ textAlign: 'center' }}>EnzRossi ©{new Date().getFullYear()}</Footer>
        </Layout>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
