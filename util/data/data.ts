import axios from "axios";
const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }
}
