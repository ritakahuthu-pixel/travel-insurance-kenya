'use client';

import { useState, useCallback } from "react";
import { apiCall } from "@lib/api-client";

interface UseApiOptions {
  onSuccess?: (data: unknown) => void;
  onError?: (error: string) => void;
}

export function useApi<T = unknown>(options?: UseApiOptions) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (
      method: "GET" | "POST" | "PUT" | "DELETE",
      endpoint: string,
      requestData?: unknown
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await apiCall<T>(method, endpoint, requestData);
        if (response.success && response.data) {
          setData(response.data);
          options?.onSuccess?.(response.data);
        } else {
          setError(response.message);
          options?.onError?.(response.message);
        }
        return response;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        options?.onError?.(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [options]
  );

  return { data, error, isLoading, execute };
}
