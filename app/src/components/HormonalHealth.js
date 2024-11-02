export default function HormonalHealth() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Para mujeres: Ciclos menstruales regulares:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Síntomas premenstruales:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Dolor y malestar físico (por ejemplo, dolor abdominal, dolor de cabeza):</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Describa los síntomas" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Cambios emocionales y de humor:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Describa los cambios" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Síntomas cognitivos:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Dificultad para concentrarse, fatiga, etc." />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Uso de anticonceptivos hormonales:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Historial de embarazos y partos:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="X/x" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Para hombres: Problemas de salud reproductiva:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Libido y función sexual (si procede):</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Describa su estado" />
        </label>
      </div>
    );
  }
  