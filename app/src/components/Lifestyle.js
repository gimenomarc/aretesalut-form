export default function Lifestyle() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Consumo de tabaco (Cantidad diaria):</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Nº cigarrillos / día" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Consumo de bebidas alcohólicas:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Frecuencia y cantidad" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Tiempo al aire libre y exposición a la naturaleza/sol a la semana:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>&lt;1h</option>
            <option>1h-2h</option>
            <option>&gt;2h</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Vida social activa:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Turno laboral:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Diurno</option>
            <option>Nocturno</option>
            <option>Turnos rotativos</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Horario de trabajo:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Horario" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Tipo de trabajo:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sedentario (Oficina)</option>
            <option>Andando</option>
            <option>Trabajo Físico Medio</option>
            <option>Trabajo Físico Intenso</option>
          </select>
        </label>
      </div>
    );
  }
  