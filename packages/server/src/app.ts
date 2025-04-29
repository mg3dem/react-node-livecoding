import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { getCodeSandboxHost } from '@codesandbox/utils';

import todoRoutes from './routes/todo.route';

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
// app.use(
//   cors({
//     origin: getCodeSandboxHost(3000),
//   }),
// );
app.use(
  cors({
    origin: /\.csb\.app$/,
  }),
);
app.options('*', cors());

app.get('/', (_req, res) => {
  res.json({ todos: '/todos' });
});

app.use('/todos', todoRoutes);

export default app;
