import { useState } from 'react';

export default function ActividadFisica() {
  const [realizaActividad, setRealizaActividad] = useState('no');
  const [tipoActividad, setTipoActividad] = useState([]);
  const [frecuenciaSemanal, setFrecuenciaSemanal] = useState('');
  const [duracionSesion, setDuracionSesion] = useState('');
  const [intensidad, setIntensidad] = useState('');
  const [limitaciones, setLimitaciones] = useState('');
  const [modificarRutina, setModificarRutina] = useState('no');
  const [detalleRutina, setDetalleRutina] = useState('');
  const [preferenciasEjercicio, setPreferenciasEjercicio] = useState([]);
  const [tiempoEjercicio, setTiempoEjercicio] = useState('');
  const [nivelEnergia, setNivelEnergia] = useState('');

  const actividadOpciones = ['Correr', 'Bicicleta', 'Gimnasio', 'Yoga', 'Entreno Funcional', 'HIIT', 'Otra'];
  const preferenciasOpciones = ['Cardiovascular', 'Fuerza', 'Mixta', 'Ejercicio bajo impacto', 'Flexibilidad y equilibrio'];

  const handleActividadChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTipoActividad([...tipoActividad, value]);
    } else {
      setTipoActividad(tipoActividad.filter((item) => item !== value));
    }
  };

  const handlePreferenciasChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPreferenciasEjercicio([...preferenciasEjercicio, value]);
    } else {
      setPreferenciasEjercicio(preferenciasEjercicio.filter((item) => item !== value));
    }
  };

  return (
    <div>
      {/* ¿Realiza actividad física regularmente? */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Realiza actividad física regularmente?</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={realizaActividad}
          onChange={(e) => setRealizaActividad(e.target.value)}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </label>

      {/* Tipo de actividad física */}
      {realizaActividad === 'si' && (
        <>
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Tipo de actividad física:</span>
            <div className="mt-2 space-y-2">
              {actividadOpciones.map((actividad, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={actividad}
                    onChange={handleActividadChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{actividad}</span>
                </label>
              ))}
            </div>
            {tipoActividad.includes('Otra') && (
              <input
                type="text"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Especifique otra actividad"
                value={detalleRutina}
                onChange={(e) => setDetalleRutina(e.target.value)}
              />
            )}
          </label>

          {/* Frecuencia semanal */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Frecuencia semanal (Número de días):</span>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ej. 3"
              value={frecuenciaSemanal}
              onChange={(e) => setFrecuenciaSemanal(e.target.value)}
            />
          </label>

          {/* Duración de cada sesión */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Duración de cada sesión (minutos):</span>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ej. 45"
              value={duracionSesion}
              onChange={(e) => setDuracionSesion(e.target.value)}
            />
          </label>

          {/* Nivel de intensidad */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Nivel de intensidad:</span>
            <select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              value={intensidad}
              onChange={(e) => setIntensidad(e.target.value)}
            >
              <option value="bajo">Bajo</option>
              <option value="medio">Medio</option>
              <option value="alto">Alto</option>
            </select>
          </label>
        </>
      )}

      {/* Limitaciones físicas o lesiones */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Limitaciones físicas o lesiones actuales:</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Especifique cualquier limitación o lesión"
          value={limitaciones}
          onChange={(e) => setLimitaciones(e.target.value)}
        />
      </label>

      {/* ¿Le gustaría iniciar o modificar su rutina de ejercicio? */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Le gustaría iniciar o modificar su rutina de ejercicio?</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={modificarRutina}
          onChange={(e) => setModificarRutina(e.target.value)}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </label>
      {modificarRutina === 'si' && (
        <input
          type="text"
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Describa la nueva rutina o cambios deseados"
          value={detalleRutina}
          onChange={(e) => setDetalleRutina(e.target.value)}
        />
      )}

      {/* Preferencias de tipo de ejercicio */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Preferencias de tipo de ejercicio o actividades físicas:</span>
        <div className="mt-2 space-y-2">
          {preferenciasOpciones.map((preferencia, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                value={preferencia}
                onChange={handlePreferenciasChange}
                className="form-checkbox"
              />
              <span className="ml-2">{preferencia}</span>
            </label>
          ))}
        </div>
      </label>

      {/* Tiempo dedicado al ejercicio semanalmente */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Tiempo que puede dedicar al ejercicio semanalmente y tiempo por sesión disponible:</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Ej. 3 horas semanales, 1 hora por sesión"
          value={tiempoEjercicio}
          onChange={(e) => setTiempoEjercicio(e.target.value)}
        />
      </label>

      {/* Nivel de Energía y Vitalidad General */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Nivel de Energía y Vitalidad General:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={nivelEnergia}
          onChange={(e) => setNivelEnergia(e.target.value)}
        >
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </label>
    </div>
  );
}
