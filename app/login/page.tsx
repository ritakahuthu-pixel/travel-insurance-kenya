'use client';

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Container, Button, Input, Card } from "@components/shared";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";
import { validators, errorMessages } from "@utils/validators";
import type { LoginFormData } from "@types";
import { authService } from "@services/index";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginFormData>({
  mode: "onBlur",
  defaultValues: {
    email: "",
    password: "",
    rememberMe: false,
  },
});
  
  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await authService.login(data);

      if (response.success && response.data) {
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem(
          "user_data",
          JSON.stringify(response.data.user)
        );

        if (data.rememberMe) {
          localStorage.setItem("remember_email", data.email);
        }

        setIsSuccess(true);

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        setApiError(response.message || "Login failed. Please try again.");
      }
    } catch {
      setApiError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-12 pb-20">
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Shield size={32} className="text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-gray-600">Sign in to access your travel insurance account</p>
              </div>

              {/* Error Alert */}
              {apiError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl"
                >
                  <p className="text-red-700 text-sm font-medium">{apiError}</p>
                </motion.div>
              )}

              {/* Success Alert */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl"
                >
                  <p className="text-green-700 text-sm font-medium">Login successful! Redirecting...</p>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail size={20} />}
                  error={errors.email?.message}
                  {...register("email", {
                    required: errorMessages.required,
                    validate: (value) => {
                      if (!validators.email(value)) {
                        return errorMessages.email;
                      }
                      return true;
                    },
                  })}
                />

                {/* Password */}
                <div>
                  <Input
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    icon={<Lock size={20} />}
                    error={errors.password?.message}
                    {...register("password", {
                      required: errorMessages.required,
                      minLength: {
                        value: 8,
                        message: errorMessages.password,
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-[58px] text-gray-500 hover:text-gray-700 transition-smooth"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("rememberMe")}
                      className="w-4 h-4 border-2 border-gray-300 rounded accent-primary cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 font-medium">Remember me</span>
                  </label>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:text-opacity-80 transition-smooth font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-500 font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Register Link */}
              <p className="text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="ml-1 text-primary font-bold hover:text-opacity-80 hover:underline transition-smooth"
                >
                  Create one now
                </Link>
              </p>
            </Card>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">500K+</p>
                <p className="text-xs text-gray-600 mt-1">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">100%</p>
                <p className="text-xs text-gray-600 mt-1">Secure</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-xs text-gray-600 mt-1">Support</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
