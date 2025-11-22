import { Navigate, Outlet } from "react-router-dom";
import { useAuthMe } from "@/hooks/useAuthMe";


const ProtectedRoute = () => {
    const { user, loadingUser } = useAuthMe();

    if(loadingUser) return <p>Carregando...</p>;
    if(!user) return <Navigate to = '/login' replace />;

    return <Outlet />;
};


export default ProtectedRoute;