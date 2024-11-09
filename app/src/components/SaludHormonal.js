import { useState } from 'react';

export default function SaludHormonal({ genero }) {
  // Estados para mujeres
  const [ciclosRegulares, setCiclosRegulares] = useState('');
  const [sintomasPremenstruales, setSintomasPremenstruales] = useState('');
  const [dolorFisico, setDolorFisico] = useState([]);
  const [cambiosEmocionales, setCambiosEmocionales] = useState([]);
  const [sintomasCognitivos, setSintomasCognitivos] = useState([]);
  const [cambiosApetito, setCambiosApetito] = useState([]);
  const [otrosSintomas, setOtrosSintomas] = useState('');
  const [anticonceptivos, setAnticonceptivos] = useState('');
  const [embarazos, setEmbarazos] = useState('');

  // Estados para hombres
  const [problemasReproductivos, setProblemasReproductivos] = useState('');
  const [especificacionProblemas, setEspecificacionProblemas] = useState('');

  // Opciones de síntomas para mujeres
  const opcionesDolorFisico = [
    'Dolor abdominal', 'Dolor de espalda baja', 'Hipersenibilidad mamaria', 'Dolor de cabeza', 'Dolor articular'
  ];
  const opcionesCambiosEmocionales = [
    'Irritabilidad', 'Ansiedad', 'Depresión', 'Cambios de humor', 'Tristeza', 'Labilidad emocional'
  ];
  const opcionesSintomasCognitivos = [
    'Dificultad para concentrarse', 'Falta de energía o fatiga', 'Insomnio', 'Somnolencia'
  ];
  const opcionesCambiosApetito = [
    'Aumento', 'Pérdida', 'Antojos (Dulces/Salados)', 'Náuseas', 'Distensión abdominal', 'Gases', 'Estreñimiento', 'Diarrea'
  ];

  // Handlers para el cambio de selección de síntomas
  const handleCheckChange = (e, setState, state) => {
    const { value, checked } = e.target;
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };

  return (
    <div>
      {genero === 'femenino' && (
        <>
          {/* Para mujeres */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Ciclos menstruales regulares:</span>
            <select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              value={ciclosRegulares}
              onChange={(e) => setCiclosRegulares(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Síntomas premenstruales:</span>
            <select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              value={sintomasPremenstruales}
              onChange={(e) => setSintomasPremenstruales(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          {sintomasPremenstruales === 'si' && (
            <>
              {/* Dolor y Malestar Físico */}
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Dolor y Malestar Físico:</span>
                <div className="mt-2 space-y-2">
                  {opcionesDolorFisico.map((opcion, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={opcion}
                        onChange={(e) => handleCheckChange(e, setDolorFisico, dolorFisico)}
                        className="form-checkbox"
                      />
                      <span className="ml-2">{opcion}</span>
                    </label>
                  ))}
                </div>
              </label>

              {/* Cambios emocionales y de humor */}
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Cambios emocionales y de humor:</span>
                <div className="mt-2 space-y-2">
                  {opcionesCambiosEmocionales.map((opcion, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={opcion}
                        onChange={(e) => handleCheckChange(e, setCambiosEmocionales, cambiosEmocionales)}
                        className="form-checkbox"
                      />
                      <span className="ml-2">{opcion}</span>
                    </label>
                  ))}
                </div>
              </label>

              {/* Síntomas cognitivos */}
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Síntomas cognitivos:</span>
                <div className="mt-2 space-y-2">
                  {opcionesSintomasCognitivos.map((opcion, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={opcion}
                        onChange={(e) => handleCheckChange(e, setSintomasCognitivos, sintomasCognitivos)}
                        className="form-checkbox"
                      />
                      <span className="ml-2">{opcion}</span>
                    </label>
                  ))}
                </div>
              </label>

              {/* Cambios en el apetito */}
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Cambios en el apetito:</span>
                <div className="mt-2 space-y-2">
                  {opcionesCambiosApetito.map((opcion, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={opcion}
                        onChange={(e) => handleCheckChange(e, setCambiosApetito, cambiosApetito)}
                        className="form-checkbox"
                      />
                      <span className="ml-2">{opcion}</span>
                    </label>
                  ))}
                </div>
              </label>

              {/* Otros síntomas */}
              <label className="block mb-4">
                <span className="text-gray-700 font-medium">Otros síntomas:</span>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Describa otros síntomas"
                  value={otrosSintomas}
                  onChange={(e) => setOtrosSintomas(e.target.value)}
                />
              </label>
            </>
          )}

          {/* Uso de anticonceptivos hormonales */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Uso de anticonceptivos hormonales:</span>
            <select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              value={anticonceptivos}
              onChange={(e) => setAnticonceptivos(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          {/* Historial de embarazos y partos */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Historial de embarazos y partos:</span>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Número de embarazos/partos"
              value={embarazos}
              onChange={(e) => setEmbarazos(e.target.value)}
            />
          </label>
        </>
      )}

      {genero === 'masculino' && (
        <>
          {/* Para hombres */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Problemas de salud reproductiva:</span>
            <select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              value={problemasReproductivos}
              onChange={(e) => setProblemasReproductivos(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>
          {problemasReproductivos === 'si' && (
            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Especificación de problemas (opcional):</span>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Describa si es necesario"
                value={especificacionProblemas}
                onChange={(e) => setEspecificacionProblemas(e.target.value)}
              />
            </label>
          )}
        </>
      )}
    </div>
  );
}
