export default function PersonalInfo() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700">Nombre Completo:</span>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Juan Pérez" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Edad:</span>
        <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="28" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Fecha de Nacimiento:</span>
        <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Género:</span>
        <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Otro</option>
        </select>
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Profesión/Ocupación:</span>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Ingeniero" />
      </label>
    </div>
  );
}
