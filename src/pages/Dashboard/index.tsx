import React from "react";
import BalanceCard from "@/components/BalanceCard";
import Header from "@/components/Header";
import { useAuthMe } from "@/hooks/useAuthMe";
import { useGetUserBalance } from "@/hooks/useGetUserBalance";


const Dashboard: React.FC = () => {
  const { user, loadingUser } = useAuthMe();
  const { balance, loadingBalance } = useGetUserBalance();

    if (loadingUser || loadingBalance) {
        return (
            <div className="min-h-screen bg-gray-950 text-gray-100 flex">
                <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="flex-1 p-6 md:p-10">
                        <h1 className="text-4xl font-extrabold mb-8 text-white">
                            Olá, <span className="text-fuchsia-500 animate-pulse">Carregando...</span>
                        </h1>
                        <section className="mb-10">
                            <BalanceCard balance={"Carrregando.."}  />
                        </section>
                    </main>
                </div>
            </div>
        );
    }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
        <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6 md:p-10">
                <h1 className="text-4xl font-extrabold mb-8 text-white">
                    Olá,<span className="text-fuchsia-500">{" "}{user!.name}</span>
                </h1>
                
                <section className="mb-10">
                    <BalanceCard balance={ balance! } />
                </section>

                <hr className="border-gray-800 my-8" />

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-gray-200">
                        Ações Rápidas ⚡
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl hover:bg-fuchsia-900/40 transition">
                            <span className="text-3xl mb-2 text-fuchsia-500">💳</span>
                            <span className="text-sm font-medium">Pix/Transferir</span>
                        </button>

                        <button className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl hover:bg-fuchsia-900/40 transition">
                            <span className="text-3xl mb-2 text-fuchsia-500">📱</span>
                            <span className="text-sm font-medium">Sacar</span>
                        </button>

                        <button className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl hover:bg-fuchsia-900/40 transition">
                            <span className="text-3xl mb-2 text-fuchsia-500">➕</span>
                            <span className="text-sm font-medium">Depósito</span>
                        </button>
                        </div>
                </section>
            </main>
        </div>
    </div>
  );
};

export default Dashboard;