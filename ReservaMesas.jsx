
import React, { useState } from "react";
import "./App.css";

const TOTAL_MESAS = 170;

export default function ReservaMesas() {
  const [mesas, setMesas] = useState(
    Array.from({ length: TOTAL_MESAS }, (_, i) => ({
      numero: (i + 1).toString().padStart(3, "0"),
      status: "disponivel",
    }))
  );

  const [mesaSelecionada, setMesaSelecionada] = useState(null);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [comprovante, setComprovante] = useState(null);

  const selecionarMesa = (numero) => {
    const mesa = mesas.find((m) => m.numero === numero);
    if (mesa.status === "disponivel") {
      setMesaSelecionada(mesa);
    }
  };

  const handleReserva = () => {
    alert(`Mesa ${mesaSelecionada.numero} reservada para ${nome}!`);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Reserva de Mesas</h1>
      <p className="text-center text-sm mb-6">Paróquia Sagrada Família</p>

      <div className="grid grid-cols-5 gap-2">
        {mesas.map((mesa) => (
          <div
            key={mesa.numero}
            className={`cursor-pointer text-center p-2 text-sm font-semibold rounded-xl transition-all border-2 ${
              mesa.status === "vendida"
                ? "bg-gray-300 text-gray-500 border-gray-400"
                : mesa.status === "reservada"
                ? "bg-yellow-200 border-yellow-500"
                : "bg-green-100 hover:bg-green-200 border-green-400"
            }`}
            onClick={() => selecionarMesa(mesa.numero)}
          >
            Mesa {mesa.numero}
          </div>
        ))}
      </div>

      {mesaSelecionada && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">
            Mesa Selecionada: {mesaSelecionada.numero}
          </h2>

          <div className="mb-2">
            <input
              type="text"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 rounded border"
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              placeholder="WhatsApp com DDD"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-2 rounded border"
            />
          </div>

          <div className="mb-2">
            <label className="block mb-1 font-medium">Comprovante (simulado)</label>
            <input
              type="file"
              onChange={(e) => setComprovante(e.target.files[0])}
              className="block"
            />
          </div>

          <div className="mb-4 text-sm bg-gray-100 p-2 rounded">
            <p><strong>Chave Pix:</strong> 45.356.292/0024-24</p>
            <p><strong>Banco:</strong> Santander (Ag. 0979 - C/C 13000790-1)</p>
            <p><strong>Titular:</strong> Mitra Diocesana de São Carlos</p>
            <p><strong>Valor:</strong> R$ 40,00</p>
          </div>

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
            onClick={handleReserva}
          >
            Confirmar Reserva
          </button>
        </div>
      )}
    </div>
  );
}
