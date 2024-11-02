export default function Goals() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Motivo principal de la consulta:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Perder peso, ganar masa muscular, etc." />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">¿Tiene algún objetivo específico relacionado con el rendimiento físico?</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Apoyo familiar y de amigos respecto al objetivo:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
      </div>
    );
  }
  