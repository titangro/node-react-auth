import axios, { AxiosRequestConfig } from 'axios';

export const fetcher = (props: AxiosRequestConfig) => {
  const apiUrl = process.env.NODE_API_URL;

  console.log('🚀 ~ file: fetcher.ts ~ line 5 ~ fetcher ~ process.env', process.env);

  console.log('🚀 ~ file: fetcher.ts ~ line 6 ~ fetcher ~ apiUrl', apiUrl);

  const instance = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
  });

  return instance.request(props);
};
