import { useState } from 'react';

export default function HabitosSociales() {
  const [cantidadTabaco, setCantidadTabaco] = useState('');
  const [bebidas, setBebidas] = useState({ cerveza: '', vino: '', alcohol: '' });
  const [tiempoAireLibre, setTiempoAireLibre] = useState('');

  return (
    <div>
      {/* Consumo de tabaco */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Consumo de tabaco (Cantidad diaria):</span>
        <input
          type="number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="nº cigarrillos / día"
          value={cantidadTabaco}
          onChange={(e) => setCantidadTabaco(e.target.value)}
        />
      </label>

      {/* Consumo de bebidas alcohólicas */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Consumo de bebidas alcohólicas:</span>
        <div className="mt-2 space-y-2">
          <label className="block">
            <span className="text-gray-600">Cerveza (nº copas / semana):</span>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ej. 3"
              value={bebidas.cerveza}
              onChange={(e) => setBebidas({ ...bebidas, cerveza: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="text-gray-600">Vino (nº copas / semana):</span>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ej. 2"
              value={bebidas.vino}
              onChange={(e) => setBebidas({ ...bebidas, vino: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="text-gray-600">Alcohol alta graduación (nº copas / semana):</span>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ej. 1"
              value={bebidas.alcohol}
              onChange={(e) => setBebidas({ ...bebidas, alcohol: e.target.value })}
            />
          </label>
        </div>
      </label>

      {/* Tiempo al Aire Libre */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Tiempo al Aire Libre y Exposición a la Naturaleza/Sol a la semana:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={tiempoAireLibre}
          onChange={(e) => setTiempoAireLibre(e.target.value)}
        >
          <option value="<1h">&lt;1 hora</option>
          <option value="1-2h">1-2 horas</option>
          <option value=">2h">&gt;2 horas</option>
        </select>
      </label>
    </div>
  );
}
