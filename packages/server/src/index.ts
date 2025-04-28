import app from './app';
import { getCodeSandboxHost } from '@codesandbox/utils';

const port = 3001;
app.listen(port, () => {
  console.log(`App listening at http://${getCodeSandboxHost(30001)}:${port}`);
});
