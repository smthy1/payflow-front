import { Link } from "react-router-dom";
import Header from "../../components/Header";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bem-vindo ao <span className="text-fuchsia-500">PayFlow</span>
        </h2>

        <p className="text-gray-400 max-w-md mb-8">
          Gerencie sua conta, simule transações, depósitos e saques, visualize seu saldo e explore 
          funcionalidades bancárias à vontade.
        </p>

        <div className="flex gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 text-lg bg-fuchsia-600 rounded-xl font-medium
              hover:bg-fuchsia-800 transition shadow-lg"
          >
            Acessar Dashboard
          </Link>

          <Link
            to="/transacoes"
            className="px-6 py-3 text-lg border border-fuchsia-600 rounded-xl
              hover:bg-fuchsia-600/40 transition"
          >
            Ver Transações
          </Link>
        </div>
      </main>

    </div>
  );
};

export default HomePage;