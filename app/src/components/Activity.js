export default function Activity() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">¿Realiza actividad física regularmente?</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Tipo de actividad física:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Correr, bicicleta, gimnasio..." />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Frecuencia semanal:</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="3" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Duración de cada sesión (minutos):</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="60" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Nivel de intensidad:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Bajo</option>
            <option>Medio</option>
            <option>Alto</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Limitaciones físicas o lesiones actuales:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Lesiones o limitaciones" />
        </label>
      </div>
    );
  }
  