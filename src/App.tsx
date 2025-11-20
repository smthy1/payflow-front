import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;