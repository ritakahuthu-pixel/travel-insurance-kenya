import { apiCall } from "@lib/api-client";
import type {
  ApiResponse,
  AuthResponse,
  LoginFormData,
} from "@/types";

export const authService = {
  login: async (data: LoginFormData): Promise<ApiResponse<AuthResponse>> => {
    return apiCall<AuthResponse>("POST", "/auth/login", {
      email: data.email,
      password: data.password,
    });
  },

  register: async (data: {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
  }): Promise<ApiResponse<AuthResponse>> => {
    return apiCall<AuthResponse>("POST", "/auth/register", data);
  },

  logout: async (): Promise<void> => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_data");
    }
  },

  getCurrentUser: async (): Promise<ApiResponse> => {
    return apiCall("GET", "/auth/me");
  },

  refreshToken: async (): Promise<ApiResponse<AuthResponse>> => {
    return apiCall<AuthResponse>("POST", "/auth/refresh");
  },
};
