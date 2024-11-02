import { UserIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline';

export default function PersonalInfo() {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <UserIcon className="w-5 h-5 mr-2" />
          Nombre Completo:
        </span>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Juan Pérez"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <PhoneIcon className="w-5 h-5 mr-2" />
          Teléfono:
        </span>
        <input
          type="tel"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="+34 123 456 789"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 flex items-center">
          <MailIcon className="w-5 h-5 mr-2" />
          Correo Electrónico:
        </span>
        <input
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="correo@ejemplo.com"
        />
      </label>
    </div>
  );
}
