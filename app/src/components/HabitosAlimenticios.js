import { useState } from 'react';

export default function HabitosAlimenticios() {
  const [comidasDiarias, setComidasDiarias] = useState(1);
  const [comidas, setComidas] = useState([{ tipo: '', hora: '' }]);
  const [tipoAlimentacion, setTipoAlimentacion] = useState('omnívora');
  const [otrasAlimentacion, setOtrasAlimentacion] = useState('');
  const [frutas, setFrutas] = useState('');
  const [verduras, setVerduras] = useState('');
  const [agua, setAgua] = useState('');
  const [refrescos, setRefrescos] = useState('');
  const [estimulantes, setEstimulantes] = useState([]);
  const [consumoEstimulantes, setConsumoEstimulantes] = useState('');
  const [preferencias, setPreferencias] = useState('');
  const [favoritos, setFavoritos] = useState('');
  const [evitados, setEvitados] = useState('');
  const [restricciones, setRestricciones] = useState('');
  const [registroDiario, setRegistroDiario] = useState('');
  const [atracones, setAtracones] = useState('no');

  const comidasOpciones = ['Desayuno', 'Media mañana', 'Almuerzo', 'Merienda', 'Cena', 'Resopón', 'Snack'];

  const handleComidasChange = (e) => {
    const valor = parseInt(e.target.value, 10);
    setComidasDiarias(valor);
    setComidas(Array(valor).fill({ tipo: '', hora: '' }));
  };

  const handleComidaTipoHoraChange = (index, field, value) => {
    const updatedComidas = comidas.map((comida, i) =>
      i === index ? { ...comida, [field]: value } : comida
    );
    setComidas(updatedComidas);
  };

  return (
    <div>
      {/* Número de comidas diarias */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Número de comidas habitualmente al día:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={comidasDiarias}
          onChange={handleComidasChange}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>

      {comidas.map((comida, index) => (
        <div key={index} className="flex space-x-4 mb-4">
          <select
            className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            value={comida.tipo}
            onChange={(e) => handleComidaTipoHoraChange(index, 'tipo', e.target.value)}
          >
            <option value="">Seleccione tipo de comida</option>
            {comidasOpciones.map((tipo, idx) => (
              <option key={idx} value={tipo}>{tipo}</option>
            ))}
          </select>
          <input
            type="time"
            className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            value={comida.hora}
            onChange={(e) => handleComidaTipoHoraChange(index, 'hora', e.target.value)}
          />
        </div>
      ))}

      {/* Tipo de alimentación */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Tipo de alimentación actual:</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={tipoAlimentacion}
          onChange={(e) => setTipoAlimentacion(e.target.value)}
        >
          <option value="omnívora">Omnívora</option>
          <option value="vegetariana">Vegetariana</option>
          <option value="vegana">Vegana</option>
          <option value="paleo">Paleo</option>
          <option value="otras">Otras</option>
        </select>
      </label>
      {tipoAlimentacion === 'otras' && (
        <input
          type="text"
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Especifique su tipo de alimentación"
          value={otrasAlimentacion}
          onChange={(e) => setOtrasAlimentacion(e.target.value)}
        />
      )}

      {/* Consumo de frutas y verduras */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Consumo diario de frutas:</span>
        <input
          type="number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Porciones de fruta"
          value={frutas}
          onChange={(e) => setFrutas(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Consumo diario de verduras:</span>
        <input
          type="number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Porciones de verduras"
          value={verduras}
          onChange={(e) => setVerduras(e.target.value)}
        />
      </label>

      {/* Consumo de agua */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Consumo aproximado de agua diario (litros):</span>
        <input
          type="number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={agua}
          onChange={(e) => setAgua(e.target.value)}
        />
      </label>

      {/* Consumo de refrescos */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Consumo de refrescos (nº / diario-semanal):</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={refrescos}
          onChange={(e) => setRefrescos(e.target.value)}
        />
      </label>

      {/* Consumo de bebidas estimulantes */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Consumo de bebidas estimulantes:</span>
        <div className="mt-2 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="cafe/te"
              onChange={(e) => setEstimulantes(
                e.target.checked ? [...estimulantes, e.target.value] : estimulantes.filter(i => i !== e.target.value)
              )}
              className="form-checkbox"
            />
            <span className="ml-2">Café/Té</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="bebidas energeticas"
              onChange={(e) => setEstimulantes(
                e.target.checked ? [...estimulantes, e.target.value] : estimulantes.filter(i => i !== e.target.value)
              )}
              className="form-checkbox"
            />
            <span className="ml-2">Bebidas energéticas</span>
          </label>
        </div>
        <input
          type="text"
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="nº / diario-semanal"
          value={consumoEstimulantes}
          onChange={(e) => setConsumoEstimulantes(e.target.value)}
        />
      </label>

      {/* Preferencias y Aversión Alimentaria */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Preferencias y Aversión Alimentaria:</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Describa si existe"
          value={preferencias}
          onChange={(e) => setPreferencias(e.target.value)}
        />
      </label>

      {/* Alimentos favoritos y evitados */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Alimentos favoritos:</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Describa los alimentos favoritos"
          value={favoritos}
          onChange={(e) => setFavoritos(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Alimentos que no le gustan o evita:</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Describa los alimentos que evita"
          value={evitados}
          onChange={(e) => setEvitados(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Restricciones dietéticas (culturales, religiosas o éticas):</span>
        <input
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Describa las restricciones"
          value={restricciones}
          onChange={(e) => setRestricciones(e.target.value)}
        />
      </label>

      {/* Registro Alimentario Detallado */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Registro alimentario de un día típico:</span>
        <textarea
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Ejemplo de un día típico: Por la mañana desayuno fruta, para comer, arroz con verduras y para cenar, sopa.."
          value={registroDiario}
          onChange={(e) => setRegistroDiario(e.target.value)}
        />
      </label>

      {/* Episodios de atracones */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Tiene episodios de atracones o pérdida de control al comer?</span>
        <select
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          value={atracones}
          onChange={(e) => setAtracones(e.target.value)}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </label>
    </div>
  );
}
