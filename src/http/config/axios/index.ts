import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: import.meta.env.API_BASE_URL || 'http://localhost:3000/api/v1/',
});
