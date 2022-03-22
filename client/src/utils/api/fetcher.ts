import axios, { AxiosRequestConfig } from 'axios';

export const fetcher = (props: AxiosRequestConfig) => {
  const apiUrl = process.env.NODE_API_URL;

  const instance = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
  });

  return instance.request(props);
};
