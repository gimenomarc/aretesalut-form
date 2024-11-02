import { HeartIcon, ScaleIcon } from '@heroicons/react/outline';

export default function MedicalHistory() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <ScaleIcon className="w-5 h-5 mr-2" />
          Peso Actual (kg):
        </span>
        <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="70" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <ScaleIcon className="w-5 h-5 mr-2" />
          Estatura (cm):
        </span>
        <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="175" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <HeartIcon className="w-5 h-5 mr-2" />
          ¿Tiene alguna enfermedad crónica?
        </span>
        <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
          <option>Diabetes</option>
          <option>Hipertensión</option>
          <option>Otras</option>
        </select>
      </label>
      {/* Add additional fields as needed */}
    </div>
  );
}
