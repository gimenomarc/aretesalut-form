import { useState } from 'react';

export default function EstresSaludMental() {
  const [nivelEstres, setNivelEstres] = useState(null);
  const [sintomas, setSintomas] = useState([]);
  const [practicaRelajacion, setPracticaRelajacion] = useState('no');
  const [tecnicasRelajacion, setTecnicasRelajacion] = useState([]);
  const [estadoAnimo, setEstadoAnimo] = useState('');

  const sintomasOpciones = ['Ansiedad', 'Irritabilidad', 'Dificultad para concentrarse', 'Otros'];
  const tecnicasOpciones = ['Meditación', 'Respiración profunda', 'Yoga', 'Otras'];
  const carasEscala = [
    { nivel: 0, label: 'Sin dolor', emoji: '😀' },
    { nivel: 2, label: 'Duele un poco', emoji: '🙂' },
    { nivel: 4, label: 'Duele un poco más', emoji: '😐' },
    { nivel: 6, label: 'Duele aún más', emoji: '😕' },
    { nivel: 8, label: 'Duele mucho', emoji: '😟' },
    { nivel: 10, label: 'El peor dolor', emoji: '😫' }
  ];

  const handleSintomasChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSintomas([...sintomas, value]);
    } else {
      setSintomas(sintomas.filter((item) => item !== value));
    }
  };

  const handleTecnicasChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTecnicasRelajacion([...tecnicasRelajacion, value]);
    } else {
      setTecnicasRelajacion(tecnicasRelajacion.filter((item) => item !== value));
    }
  };

  return (
    <div>
      {/* Nivel de estrés actual */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Nivel de estrés actual:</span>
        <div className="flex justify-between mt-4">
          {carasEscala.map((cara) => (
            <button
              key={cara.nivel}
              onClick={() => setNivelEstres(cara.nivel)}
              className={`flex flex-col items-center text-3xl p-4 cursor-pointer transition-transform ${
                nivelEstres === cara.nivel ? 'transform scale-110 text-indigo-600' : 'text-gray-400'
              }`}
            >
              <span>{cara.emoji}</span>
              <span className="text-sm mt-2">{cara.label}</span>
            </button>
          ))}
        </div>
      </label>

      {/* Síntomas asociados al estrés */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Síntomas asociados al estrés:</span>
        <div className="mt-2 space-y-2">
          {sintomasOpciones.map((sintoma, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                value={sintoma}
                onChange={handleSintomasChange}
                className="form-checkbox"
              />
              <span className="ml-2">{sintoma}</span>
            </label>
          ))}
        </div>
      </label>

      {/* Práctica de técnicas de relajación */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Practica técnicas de relajación?</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={practicaRelajacion}
          onChange={(e) => setPracticaRelajacion(e.target.value)}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </label>
      {practicaRelajacion === 'si' && (
        <div className="mt-2 space-y-2">
          {tecnicasOpciones.map((tecnica, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                value={tecnica}
                onChange={handleTecnicasChange}
                className="form-checkbox"
              />
              <span className="ml-2">{tecnica}</span>
            </label>
          ))}
        </div>
      )}

      {/* Estado de ánimo general */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Estado de ánimo general:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={estadoAnimo}
          onChange={(e) => setEstadoAnimo(e.target.value)}
        >
          <option value="positivo">Positivo</option>
          <option value="negativo">Negativo</option>
          <option value="fluctuante">Fluctuante</option>
        </select>
      </label>
    </div>
  );
}
