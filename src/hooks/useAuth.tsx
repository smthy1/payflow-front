import { useState, useEffect } from "react";
import api from "../services/api";
import type { AuthState } from "../types/AuthState";
import type { PayloadUser } from "../types/User";


export const useAuth = (): AuthState => {
    const [user, setUser] = useState<PayloadUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const loadUser = async () => {
        try {
            const res = await api.get('/auth/me');
            //console.log(res);
            setUser(res.data.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const refetch = async () => {
        await loadUser();
    };

    return { user, loading, refetch };
};