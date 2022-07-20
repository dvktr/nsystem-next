import axios from 'axios';

export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseUrl: process.env.NEXT_PUBLIC_API_URL
    });
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  
}