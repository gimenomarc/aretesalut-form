import { useState } from 'react';

export default function EvaluacionLaboralAmbiental() {
  const [turnoLaboral, setTurnoLaboral] = useState('');
  const [horarioTrabajo, setHorarioTrabajo] = useState('');
  const [puestoTrabajo, setPuestoTrabajo] = useState('');
  const [tipoTrabajo, setTipoTrabajo] = useState('');

  return (
    <div>
      {/* Turno Laboral */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Turno Laboral:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={turnoLaboral}
          onChange={(e) => setTurnoLaboral(e.target.value)}
        >
          <option value="">Seleccione un turno</option>
          <option value="diurno">Diurno</option>
          <option value="nocturno">Nocturno</option>
          <option value="rotativo">Turnos rotativos</option>
        </select>
      </label>

      {/* Horario de Trabajo */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Horario de trabajo:</span>
        <input
          type="time"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={horarioTrabajo}
          onChange={(e) => setHorarioTrabajo(e.target.value)}
        />
      </label>

      {/* Puesto de Trabajo */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Puesto de trabajo:</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Especifique su puesto de trabajo"
          value={puestoTrabajo}
          onChange={(e) => setPuestoTrabajo(e.target.value)}
        />
      </label>

      {/* Tipo de Trabajo */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Tipo de trabajo:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={tipoTrabajo}
          onChange={(e) => setTipoTrabajo(e.target.value)}
        >
          <option value="">Seleccione el tipo de trabajo</option>
          <option value="sedentario">Sedentario - Oficina</option>
          <option value="andando">Andando</option>
          <option value="fisico_medio">Trabajo Físico Medio</option>
          <option value="fisico_intenso">Trabajo Físico Intenso</option>
        </select>
      </label>
    </div>
  );
}
