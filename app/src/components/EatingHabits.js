import { FireIcon } from '@heroicons/react/outline';

export default function EatingHabits() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <FireIcon className="w-5 h-5 mr-2" />
          Número de comidas al día:
        </span>
        <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="3" />
      </label>
      {/* Otros campos */}
    </div>
  );
}
