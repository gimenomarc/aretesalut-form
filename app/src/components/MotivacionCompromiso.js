import { useState } from 'react';

export default function MotivacionCompromiso() {
  const [haIntentadoObjetivos, setHaIntentadoObjetivos] = useState('no');
  const [metodosResultados, setMetodosResultados] = useState('');

  return (
    <div>
      {/* ¿Ha intentado alcanzar estos objetivos en el pasado? */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Ha intentado alcanzar estos objetivos en el pasado?</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={haIntentadoObjetivos}
          onChange={(e) => setHaIntentadoObjetivos(e.target.value)}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </label>

      {/* Pregunta adicional si la respuesta es "Sí" */}
      {haIntentadoObjetivos === 'si' && (
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">¿Qué métodos utilizó y cuáles fueron los resultados?</span>
          <textarea
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={metodosResultados}
            onChange={(e) => setMetodosResultados(e.target.value)}
            placeholder="Describa los métodos y resultados anteriores"
          />
        </label>
      )}
    </div>
  );
}
