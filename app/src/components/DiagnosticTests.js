export default function DiagnosticTests() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Análisis de sangre recientes:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Fecha y resultados relevantes" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Perfil lipídico, glucemia, función renal y hepática:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Detalles de resultados" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Pruebas hormonales (Tiroides, cortisol, otros):</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Resultados de pruebas hormonales" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Otros exámenes médicos realizados:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Describa otros exámenes" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Comentarios adicionales:</span>
          <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Información adicional para asesoramiento" />
        </label>
      </div>
    );
  }
  