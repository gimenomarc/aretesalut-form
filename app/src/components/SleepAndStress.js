import { MoonIcon } from '@heroicons/react/outline';

export default function SleepAndStress() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <MoonIcon className="w-5 h-5 mr-2" />
          Horas promedio de sueño por noche:
        </span>
        <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="8" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Nivel de estrés (1-10):</span>
        <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="5" />
      </label>
      {/* Add additional fields as needed */}
    </div>
  );
}
