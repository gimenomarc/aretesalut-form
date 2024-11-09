import { useState } from 'react';

export default function ComentariosAdicionales({ onFinalizar }) {
  const [informacionAdicional, setInformacionAdicional] = useState('');
  const [asesoramientoAdicional, setAsesoramientoAdicional] = useState('');

  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Información adicional que desee compartir:</span>
        <textarea
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Cualquier información relevante que desee compartir"
          value={informacionAdicional}
          onChange={(e) => setInformacionAdicional(e.target.value)}
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Hay algo más que debamos saber para brindarle un mejor asesoramiento?</span>
        <textarea
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Escriba cualquier información adicional aquí"
          value={asesoramientoAdicional}
          onChange={(e) => setAsesoramientoAdicional(e.target.value)}
        />
      </label>

      <button
        onClick={onFinalizar}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md transition-all duration-200 hover:bg-green-500 focus:ring focus:ring-green-300"
      >
        Finalizar Test
      </button>
    </div>
  );
}
