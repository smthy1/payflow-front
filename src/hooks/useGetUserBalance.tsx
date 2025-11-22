import { useState, useEffect } from "react";
import { getUserBalance } from "@/services/user/user.services";


export const useGetUserBalance = () => {
    const [balance, setBalance] = useState<string | null>(null);
    const [loadingBalance, setLoadingBalance] = useState<boolean>(true);

    const loadUserBalance = async () => {
        try {
            const res = await getUserBalance();
            setBalance(res.balance);
        } catch {
            setBalance(null);
        } finally {
            setLoadingBalance(false);
        }
    };

    useEffect(() => {
        loadUserBalance();
    }, []);

    return { balance, loadingBalance };
};