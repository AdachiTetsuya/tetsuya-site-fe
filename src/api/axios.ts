import axios, { AxiosInstance } from 'axios';

// APIURL
const apiURLDomain = 'http://127.0.0.1:8000';

export default axios.create({ baseURL: apiURLDomain });

export const authAxios: AxiosInstance = axios.create({
  baseURL: apiURLDomain,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
