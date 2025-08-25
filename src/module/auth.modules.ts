import { ApiResponse } from "@/$api";

export interface AuthRepositoryType {
  login: (payload: { name: string; password: string }) => ApiResponse;
}
