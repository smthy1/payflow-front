import React from "react";

const BalanceCard: React.FC<{ balance: number }> = ({ balance }) => {
  return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-lg transition-transform transform hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-200">
                    💰 Saldo Disponível
                </h3>
            </div>

            <p className="text-4xl font-extrabold text-white mb-2">
                {balance}
            </p>

            <button className="mt-4 px-4 py-2 bg-fuchsia-600 rounded-lg text-sm font-medium hover:bg-fuchsia-700 transition">
                Ver Extrato
            </button>
        </div>
  );
};

export default BalanceCard;