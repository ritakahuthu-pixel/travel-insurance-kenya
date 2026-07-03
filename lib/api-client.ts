import axios, { AxiosInstance, AxiosError } from "axios";
import { ApiResponse } from "@types/index";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export async function apiCall<T = unknown>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: unknown
): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.request({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return {
      success: false,
      message: axiosError.response?.data?.message || "An error occurred",
      statusCode: axiosError.response?.status || 500,
    };
  }
}

export default apiClient;
