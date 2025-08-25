import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import Cookies from "js-cookie";
interface CustomFetchOptions extends AxiosRequestConfig {
  method?: Method; // GET, POST, PUT, DELETE, etc.
  params?: Record<string, any>;
  data?: any; // For POST/PUT requests
  headers?: Record<string, string>;
}

export const customFetch = async (
  query: string = "",
  options: CustomFetchOptions = {}
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL in environment variables.");
  }

  const url = `${baseUrl}${query}`;
  const token = Cookies.get("auth_token");
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const config: AxiosRequestConfig = {
    url,
    method: options.method || "GET",
    params: options.params || {},
    data: options.data || null,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    timeout: 50000,
    signal: options.signal,
  };

  try {
    const response = await axios.request(config);
    return { data: response.data };
  } catch (err) {
    let errorMessage = "Something went wrong.";

    if (axios.isAxiosError(err)) {
      errorMessage =
        err.response?.data?.message || err.response?.data?.error || err.message;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    return {
      data: null,
      error: { message: errorMessage },
    };
  }
};
