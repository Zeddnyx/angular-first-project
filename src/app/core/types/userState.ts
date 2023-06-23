import { User } from "./user";

export interface UserState {
  isLoading: boolean;
  user: User[] | null;
  error: string | null;
}
