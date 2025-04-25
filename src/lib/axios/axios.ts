import axios from 'axios';

function axiosInstance() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

  const request = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request;
}

export { axiosInstance };
