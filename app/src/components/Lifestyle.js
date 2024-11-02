import { BanIcon, BeakerIcon } from '@heroicons/react/outline';

export default function Lifestyle() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <BanIcon className="w-5 h-5 mr-2" />
          Consumo de tabaco:
        </span>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Número de cigarrillos por día" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <BeakerIcon className="w-5 h-5 mr-2" />
          Consumo de alcohol:
        </span>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Copas por semana" />
      </label>
      {/* Otros campos */}
    </div>
  );
}
