import { useState } from 'react';

export default function InformaciónPersonal() {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [edad, setEdad] = useState(null);

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edadCalculada = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edadCalculada--;
    }
    return edadCalculada;
  };

  const handleFechaNacimientoChange = (e) => {
    const fecha = e.target.value;
    setFechaNacimiento(fecha);
    setEdad(calcularEdad(fecha));
  };

  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Nombre Completo:</span>
        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Juan Pérez" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Fecha de Nacimiento:</span>
        <input type="date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" value={fechaNacimiento} onChange={handleFechaNacimientoChange} />
      </label>

      {edad !== null && (
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Edad:</span>
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100" value={edad} readOnly />
        </label>
      )}

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Género:</span>
        <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md">
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Otro</option>
        </select>
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Profesión/Ocupación:</span>
        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Ingeniero, médico, etc." />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Teléfono:</span>
        <input type="tel" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="+34 123 456 789" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Correo Electrónico:</span>
        <input type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="correo@ejemplo.com" />
      </label>
    </div>
  );
}
