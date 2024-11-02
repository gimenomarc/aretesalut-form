import { LightningBoltIcon } from '@heroicons/react/outline';

export default function Activity() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <LightningBoltIcon className="w-5 h-5 mr-2" />
          Tipo de actividad física:
        </span>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Correr, gimnasio, yoga" />
      </label>
      {/* Otros campos */}
    </div>
  );
}
