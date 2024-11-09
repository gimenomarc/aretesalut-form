import { useState } from 'react';

export default function EvaluacionSueno() {
  const [horasSueno, setHorasSueno] = useState('');
  const [horaAcostarse, setHoraAcostarse] = useState('');
  const [horaLevantarse, setHoraLevantarse] = useState('');
  const [calidadSueno, setCalidadSueno] = useState('');
  const [descansado, setDescansado] = useState('');
  const [siestas, setSiestas] = useState('no');
  const [duracionSiesta, setDuracionSiesta] = useState('');

  return (
    <div>
      {/* Horas promedio de sueño */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Horas promedio de sueño por noche:</span>
        <input
          type="number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Ej. 7"
          value={horasSueno}
          onChange={(e) => setHorasSueno(e.target.value)}
        />
      </label>

      {/* Horario habitual de acostarse */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Horario habitual de acostarse:</span>
        <input
          type="time"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={horaAcostarse}
          onChange={(e) => setHoraAcostarse(e.target.value)}
        />
      </label>

      {/* Horario habitual de levantarse */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Horario habitual de levantarse:</span>
        <input
          type="time"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={horaLevantarse}
          onChange={(e) => setHoraLevantarse(e.target.value)}
        />
      </label>

      {/* Calidad del sueño */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Calidad del sueño:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={calidadSueno}
          onChange={(e) => setCalidadSueno(e.target.value)}
        >
          <option value="buena">Buena</option>
          <option value="regular">Regular</option>
          <option value="mala">Mala</option>
        </select>
      </label>

      {/* Nivel de descanso al despertar */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Habitualmente, se siente descansado al despertar? (Escala del 0-10):</span>
        <input
          type="number"
          min="0"
          max="10"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="0 = muy cansado, 10 = muy descansado"
          value={descansado}
          onChange={(e) => setDescansado(e.target.value)}
        />
      </label>

      {/* Siestas durante el día */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Toma siestas durante el día?</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={siestas}
          onChange={(e) => setSiestas(e.target.value)}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
          <option value="fines de semana">Fines de semana</option>
        </select>
      </label>
      {(siestas === 'si' || siestas === 'fines de semana') && (
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Duración de la siesta (minutos):</span>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Ej. 30"
            value={duracionSiesta}
            onChange={(e) => setDuracionSiesta(e.target.value)}
          />
        </label>
      )}
    </div>
  );
}
