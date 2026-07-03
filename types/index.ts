// User Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  nationalId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Auth Types
export interface AuthResponse {
  token: string;
  user: User;
}

// Policy Types
export interface Policy {
  id: string;
  userId: string;
  coverageType: "hospital" | "death" | "combined";
  startDate: Date;
  endDate: Date;
  duration: number;
  premium: number;
  status: "active" | "expired" | "pending" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

// Claim Types
export interface Claim {
  id: string;
  policyId: string;
  userId: string;
  claimType: "hospital" | "death";
  description: string;
  amount: number;
  status: "pending" | "approved" | "rejected" | "paid";
  documentUrls: string[];
  submittedAt: Date;
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message: string;
  statusCode: number;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  agreedToTerms: boolean;
}

export interface BuyCoverFormData {
  fullName: string;
  nationalId: string;
  phoneNumber: string;
  nextOfKin: string;
  departure: string;
  destination: string;
  travelDate: string;
  travelDays: number;
  premium: number;
}
