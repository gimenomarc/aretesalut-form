export default function MedicalHistory() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Peso Actual (kg):</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="70" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Estatura (cm):</span>
          <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="175" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">¿Ha sido diagnosticado con alguna enfermedad crónica?</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Diabetes, hipertensión, etc." />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Historial de enfermedades infecciosas recientemente:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Alergias o Intolerancias Alimentarias:</span>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Alergias" />
        </label>
      </div>
    );
  }
  