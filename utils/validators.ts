export const validators = {
  email: (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  phoneNumber: (phone: string): boolean => {
    const regex = /^(\+254|0)[17]\d{8}$/;
    return regex.test(phone.replace(/\s/g, ""));
  },

  password: (password: string): boolean => {
    return password.length >= 8;
  },

  nationalId: (id: string): boolean => {
    return /^\d{1,8}$/.test(id);
  },

  travelDays: (days: number): boolean => {
    return days >= 1 && days <= 365;
  },
};

export const errorMessages = {
  email: "Please enter a valid email address",
  password: "Password must be at least 8 characters",
  phoneNumber: "Please enter a valid Kenyan phone number",
  nationalId: "Please enter a valid national ID number",
  required: "This field is required",
  passwordMismatch: "Passwords do not match",
};
