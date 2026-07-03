'use client';

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Container, Button, Input, Card } from "@components/shared";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Shield, User, Phone, FileText, Users } from "lucide-react";
import { validators, errorMessages } from "@utils/validators";
import type { RegisterFormData } from "@types";
import { authService } from "@services/index";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState<string | null>(null);
  const [step, setStep] = React.useState<"form" | "otp">("form");
  const [email, setEmail] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [isVerifyingOtp, setIsVerifyingOtp] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      agreedToTerms: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      // Call registration endpoint (will send OTP to email)
      const response = await authService.register({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
      });

      if (response.success) {
        setEmail(data.email);
        setStep("otp");
      } else {
        setApiError(response.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setApiError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSubmit = async () => {
    setIsVerifyingOtp(true);
    setApiError(null);

    try {
      // Call OTP verification endpoint
      // const response = await authService.verifyOtp(email, otp);
      // if (response.success) {
      //   localStorage.setItem("auth_token", response.data.token);
      //   setTimeout(() => {
      //     window.location.href = "/dashboard";
      //   }, 1000);
      // }
      
      // Placeholder for OTP verification
      setApiError("OTP verification endpoint pending backend integration");
    } catch (error) {
      setApiError("OTP verification failed. Please try again.");
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  if (step === "otp") {
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
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                      <Shield size={32} className="text-secondary" />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
                  <p className="text-gray-600">Enter the OTP sent to {email}</p>
                </div>

                {apiError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl"
                  >
                    <p className="text-red-700 text-sm font-medium">{apiError}</p>
                  </motion.div>
                )}

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">OTP Code</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      placeholder="000000"
                      maxLength={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-secondary focus:ring-2 focus:ring-secondary/10 text-center text-2xl tracking-widest font-mono"
                    />
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    isLoading={isVerifyingOtp}
                    disabled={isVerifyingOtp || otp.length !== 6}
                    onClick={handleOtpSubmit}
                    className="w-full"
                  >
                    Verify OTP
                  </Button>

                  <button
                    type="button"
                    onClick={() => setStep("form")}
                    className="w-full py-2 text-gray-600 hover:text-primary transition-smooth font-medium"
                  >
                    Back to Registration
                  </button>
                </div>
              </Card>
            </motion.div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-12 pb-20">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <div className="lg:col-span-3">
                <Card>
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                    <p className="text-gray-600">Join Safiri Cover Kenya and protect your travels</p>
                  </div>

                  {apiError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl"
                    >
                      <p className="text-red-700 text-sm font-medium">{apiError}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Full Name */}
                    <Input
                      label="Full Name"
                      placeholder="John Mwangi"
                      icon={<User size={20} />}
                      error={errors.fullName?.message}
                      {...register("fullName", {
                        required: errorMessages.required,
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                      })}
                    />

                    {/* Email */}
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
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

                    {/* National ID */}
                    <Input
                      label="National ID Number"
                      placeholder="12345678"
                      icon={<FileText size={20} />}
                      error={errors.phoneNumber?.message}
                      {...register("phoneNumber", {
                        required: errorMessages.required,
                        validate: (value) => {
                          if (!validators.phoneNumber(value)) {
                            return errorMessages.phoneNumber;
                          }
                          return true;
                        },
                      })}
                    />

                    {/* Phone Number */}
                    <Input
                      label="Phone Number"
                      placeholder="+254 700 000 000"
                      icon={<Phone size={20} />}
                      error={errors.phoneNumber?.message}
                      {...register("phoneNumber", {
                        required: errorMessages.required,
                        validate: (value) => {
                          if (!validators.phoneNumber(value)) {
                            return errorMessages.phoneNumber;
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
                        placeholder="Minimum 8 characters"
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

                    {/* Confirm Password */}
                    <div>
                      <Input
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        icon={<Lock size={20} />}
                        error={errors.confirmPassword?.message}
                        {...register("confirmPassword", {
                          required: errorMessages.required,
                          validate: (value) => {
                            if (value !== password) {
                              return errorMessages.passwordMismatch;
                            }
                            return true;
                          },
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-[58px] text-gray-500 hover:text-gray-700 transition-smooth"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                    {/* Terms Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("agreedToTerms", {
                          required: "You must agree to the terms and conditions",
                        })}
                        className="w-5 h-5 border-2 border-gray-300 rounded-lg accent-primary cursor-pointer mt-1"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link href="#" className="text-primary font-semibold hover:underline">
                          Terms & Conditions
                        </Link>
                        {" "}and{" "}
                        <Link href="#" className="text-primary font-semibold hover:underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.agreedToTerms && (
                      <p className="text-sm text-red-500">{errors.agreedToTerms.message}</p>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                      className="w-full mt-6"
                    >
                      Create Account
                    </Button>
                  </form>

                  <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-bold hover:text-opacity-80 transition-smooth">
                      Sign in
                    </Link>
                  </p>
                </Card>
              </div>

              {/* Benefits Sidebar */}
              <div className="lg:col-span-2 space-y-4">
                <div className="sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Why Join Us?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Shield size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Instant Coverage</p>
                        <p className="text-xs text-gray-600 mt-1">Get protected within minutes</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-2xl flex items-center justify-center">
                        <Users size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Family Protection</p>
                        <p className="text-xs text-gray-600 mt-1">Add next of kin for peace of mind</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center">
                        <Mail size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">24/7 Support</p>
                        <p className="text-xs text-gray-600 mt-1">Always here when you need us</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
