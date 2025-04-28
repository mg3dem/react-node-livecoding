import axios from 'axios';

import { appConfig } from '../configs/app';

export const api = axios.create({
  baseURL: appConfig.apiBaseUrl,
});
