import { AnnotationIcon } from '@heroicons/react/outline';

export default function Goals() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <AnnotationIcon className="w-5 h-5 mr-2" />
          Motivo principal de la consulta:
        </span>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Perder peso, ganar masa muscular" />
      </label>
      {/* Otros campos */}
    </div>
  );
}
