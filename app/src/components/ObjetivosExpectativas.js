import { useState } from 'react';

export default function ObjetivosExpectativas({ validateSection }) {
  const [motivoConsulta, setMotivoConsulta] = useState('');
  const [objetivoRendimiento, setObjetivoRendimiento] = useState('');
  const [apoyoFamiliar, setApoyoFamiliar] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    if (!motivoConsulta) newErrors.motivoConsulta = 'Este campo es obligatorio';
    if (!objetivoRendimiento) newErrors.objetivoRendimiento = 'Este campo es obligatorio';
    if (!apoyoFamiliar) newErrors.apoyoFamiliar = 'Este campo es obligatorio';
    
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;

    if (isValid && validateSection) {
      validateSection(true); // Si es válido, se permite avanzar
    } else if (validateSection) {
      validateSection(false); // Si no es válido, no permite avanzar
    }
  };

  return (
    <div>
      {/* Motivo principal de la consulta */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Motivo principal de la consulta:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={motivoConsulta}
          onChange={(e) => setMotivoConsulta(e.target.value)}
        >
          <option value="">Seleccione un motivo</option>
          <option value="Perder peso">Perder peso</option>
          <option value="Ganar masa muscular">Ganar masa muscular</option>
          <option value="Recomposición corporal">Recomposición corporal</option>
          <option value="Mejorar la energía">Mejorar la energía</option>
          <option value="Salud digestiva">Salud digestiva</option>
          <option value="Mantener un peso saludable">Mantener un peso saludable</option>
          <option value="Prevenir enfermedades">Prevenir enfermedades</option>
          <option value="Mejorar el bienestar general">Mejorar el bienestar general</option>
          <option value="Mejorar hábitos de salud">Mejorar hábitos de salud</option>
          <option value="Mejorar rendimiento físico">Mejorar rendimiento físico</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.motivoConsulta && <p className="text-red-500 text-sm">{errors.motivoConsulta}</p>}
      </label>

      {/* Objetivo relacionado con el rendimiento físico o deportivo */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Tiene algún objetivo específico relacionado con el rendimiento físico o deportivo?</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Especifique su objetivo"
          value={objetivoRendimiento}
          onChange={(e) => setObjetivoRendimiento(e.target.value)}
        />
        {errors.objetivoRendimiento && <p className="text-red-500 text-sm">{errors.objetivoRendimiento}</p>}
      </label>

      {/* Apoyo familiar y de amigos */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Cuenta con el apoyo familiar y de amigos respecto al objetivo que se plantea?</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={apoyoFamiliar}
          onChange={(e) => setApoyoFamiliar(e.target.value)}
        >
          <option value="">Seleccione una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
        {errors.apoyoFamiliar && <p className="text-red-500 text-sm">{errors.apoyoFamiliar}</p>}
      </label>

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md transition-all duration-200 hover:bg-blue-500 focus:ring focus:ring-blue-300"
      >
        Validar y Continuar
      </button>
    </div>
  );
}
