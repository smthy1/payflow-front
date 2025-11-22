import { useState, useEffect } from "react";
import api from "@/services/api";
import type { AuthStateMe } from "@/types/AuthState";
import type { PayloadUser } from "@/types/User";



export const useAuthMe = (): AuthStateMe => {
    const [user, setUser] = useState<PayloadUser | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    const loadUser = async () => {
        try {
            const res = await api.get('/auth/me');

            setUser(res.data.user);
        } catch {
            setUser(null);
        } finally {
            setLoadingUser(false);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const refetch = async () => {
        await loadUser();
    };

    return { user, loadingUser, refetch };
};