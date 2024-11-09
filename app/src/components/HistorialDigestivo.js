import { useState } from 'react';

export default function HistorialDigestivo() {
  const [trastornosDigestivos, setTrastornosDigestivos] = useState([]);
  const [otroTrastorno, setOtroTrastorno] = useState('');
  const [regularidadIntestinal, setRegularidadIntestinal] = useState('');
  const [sintomasDigestivos, setSintomasDigestivos] = useState([]);
  const [otroSintoma, setOtroSintoma] = useState('');
  const [intolerancias, setIntolerancias] = useState('');

  const trastornosOpciones = [
    'Síndrome del Intestino Irritable', 'Úlceras gástricas', 'Úlceras duodenales', 'Celiaquía',
    'Enfermedad de Crohn', 'Colitis ulcerosa', 'Gastritis', 'SIBO', 'Otra'
  ];

  const sintomasOpciones = [
    'Gases', 'Hinchazón', 'Estreñimiento', 'Diarrea', 'Reflujo', 'Otros'
  ];

  const handleTrastornosChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTrastornosDigestivos([...trastornosDigestivos, value]);
    } else {
      setTrastornosDigestivos(trastornosDigestivos.filter((item) => item !== value));
    }
  };

  const handleSintomasChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSintomasDigestivos([...sintomasDigestivos, value]);
    } else {
      setSintomasDigestivos(sintomasDigestivos.filter((item) => item !== value));
    }
  };

  return (
    <div>
      {/* Trastornos Digestivos */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Trastornos Digestivos existentes diagnosticados:</span>
        <div className="mt-2 space-y-2">
          {trastornosOpciones.map((trastorno, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                value={trastorno}
                onChange={(e) => {
                  handleTrastornosChange(e);
                  if (trastorno === 'Otra') setOtroTrastorno(''); // Reset field when selected
                }}
                className="form-checkbox"
              />
              <span className="ml-2">{trastorno}</span>
            </label>
          ))}
          {trastornosDigestivos.includes('Otra') && (
            <input
              type="text"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Especifique otro trastorno digestivo"
              value={otroTrastorno}
              onChange={(e) => setOtroTrastorno(e.target.value)}
            />
          )}
        </div>
      </label>

      {/* Regularidad intestinal */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Regularidad intestinal (Frecuencia de evacuaciones / dia-semana):</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Ej. 1 vez al día, 3 veces por semana"
          value={regularidadIntestinal}
          onChange={(e) => setRegularidadIntestinal(e.target.value)}
        />
      </label>

      {/* Síntomas digestivos frecuentes */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Síntomas digestivos frecuentes:</span>
        <div className="mt-2 space-y-2">
          {sintomasOpciones.map((sintoma, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                value={sintoma}
                onChange={(e) => {
                  handleSintomasChange(e);
                  if (sintoma === 'Otros') setOtroSintoma(''); // Reset field when selected
                }}
                className="form-checkbox"
              />
              <span className="ml-2">{sintoma}</span>
            </label>
          ))}
          {sintomasDigestivos.includes('Otros') && (
            <input
              type="text"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Especifique otros síntomas digestivos"
              value={otroSintoma}
              onChange={(e) => setOtroSintoma(e.target.value)}
            />
          )}
        </div>
      </label>

      {/* Intolerancias o sensibilidades alimentarias conocidas */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Intolerancias o sensibilidades alimentarias conocidas:</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Describa cualquier intolerancia o sensibilidad"
          value={intolerancias}
          onChange={(e) => setIntolerancias(e.target.value)}
        />
      </label>
    </div>
  );
}
