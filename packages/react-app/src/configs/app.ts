import { getCodeSandboxHost } from '@codesandbox/utils';

export const appConfig = {
  name: 'Todos App',
  version: '1.0.0',
  apiBaseUrl: `http://${getCodeSandboxHost(30001)}`,
};
