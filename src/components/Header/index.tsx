import React from "react"
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    return (
        <header className="w-full bg-gray-900 border-b border-gray-800 py-4">
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-fuchsia-500">
                PayFlow
            </h1>

            <nav className="flex items-center gap-6">
                <Link 
                to="/dashboard"
                className="hover:text-fuchsia-400 transition"
                >
                Dashboard
                </Link>

                <Link 
                to="/profile"
                className="hover:text-fuchsia-400 transition"
                >
                Perfil
                </Link>

                <Link 
                to="/logout"
                className="px-4 py-1 bg-fuchsia-600 rounded-lg hover:bg-fuchsia-700 transition"
                >
                Sair
                </Link>
            </nav>
            </div>
        </header>
    );
};

export default Header;
