export default function EatingHabits() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Número de comidas habitualmente al día:</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="3" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">¿Qué comidas hace y los horarios habituales?</span>
          <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Desayuno, almuerzo, cena..." />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Tipo de alimentación actual:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Omnívora</option>
            <option>Vegetariana</option>
            <option>Vegana</option>
            <option>Paleo</option>
            <option>Otras</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Consumo diario de frutas y verduras (porciones):</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="2" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Consumo aproximado de agua diario (litros):</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="2.5" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Consumo de bebidas estimulantes (Café, té, bebidas energéticas):</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Nº diario/semanal" />
        </label>
        {/* Otros campos pueden seguir esta estructura */}
      </div>
    );
  }
  