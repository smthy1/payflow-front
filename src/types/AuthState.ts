import type { PayloadUser } from "./User";

export interface AuthStateMe {
    user: PayloadUser | null;
    loadingUser: boolean;
    refetch: () => Promise<void>;
}

export interface AuthResponse {
    message: string;
}