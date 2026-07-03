export const COLORS = {
  primary: "#0F4C81",
  secondary: "#00B894",
  accent: "#F9A826",
  background: "#F7FAFC",
  white: "#FFFFFF",
};

export const PREMIUM_PER_DAY = 10; // in KES
export const MIN_TRAVEL_DAYS = 1;
export const MAX_TRAVEL_DAYS = 365;

export const COVERAGE_OPTIONS = [
  {
    id: "hospital",
    label: "Hospital Cover",
    description: "Medical emergency coverage up to KES 1,000,000",
  },
  {
    id: "death",
    label: "Death Benefit",
    description: "Family protection up to KES 2,000,000",
  },
  {
    id: "combined",
    label: "Combined Cover",
    description: "Hospital + Death benefit coverage",
  },
];

export const CLAIM_TYPES = [
  { id: "hospital", label: "Hospital Claim" },
  { id: "death", label: "Death Benefit Claim" },
];
