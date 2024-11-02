export default function SleepAndStress() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Horas promedio de sueño por noche:</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="8" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Horario habitual de acostarse:</span>
          <input type="time" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Horario habitual de levantarse:</span>
          <input type="time" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Calidad del sueño:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Buena</option>
            <option>Regular</option>
            <option>Mala</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Dificultades para conciliar el sueño o mantenerse dormido:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Síntomas o dificultades" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">¿Se siente descansado al despertar? (0-10)</span>
          <input type="number" min="0" max="10" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="8" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Uso de dispositivos electrónicos antes de dormir:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
      </div>
    );
  }
  