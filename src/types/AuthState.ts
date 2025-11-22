import type { PayloadUser } from "./User";

export interface AuthState {
    user: PayloadUser | null;
    loading: boolean;
    refetch: () => Promise<void>;
}