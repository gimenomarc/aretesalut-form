import { useState } from 'react';

export default function AntecedentesMédicos() {
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [imc, setImc] = useState(null);
  const [enfermedades, setEnfermedades] = useState([]);
  const [otraEnfermedad, setOtraEnfermedad] = useState('');
  const [historialEnfermedades, setHistorialEnfermedades] = useState('no');
  const [alergias, setAlergias] = useState('');
  const [medicamentos, setMedicamentos] = useState([{ nombre: '', dosis: '' }]);
  const [suplementos, setSuplementos] = useState([{ tipo: '', dosis: '' }]);

  const calcularIMC = (peso, estatura) => {
    const alturaMetros = estatura / 100;
    return (peso / (alturaMetros * alturaMetros)).toFixed(2);
  };

  const handlePesoChange = (e) => {
    const valor = e.target.value;
    setPeso(valor);
    setImc(calcularIMC(valor, estatura));
  };

  const handleEstaturaChange = (e) => {
    const valor = e.target.value;
    setEstatura(valor);
    setImc(calcularIMC(peso, valor));
  };

  const handleEnfermedadesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEnfermedades([...enfermedades, value]);
    } else {
      setEnfermedades(enfermedades.filter((enf) => enf !== value));
    }
  };

  const addMedicamento = () => {
    setMedicamentos([...medicamentos, { nombre: '', dosis: '' }]);
  };

  const handleMedicamentoChange = (index, field, value) => {
    const updatedMedicamentos = [...medicamentos];
    updatedMedicamentos[index][field] = value;
    setMedicamentos(updatedMedicamentos);
  };

  const addSuplemento = () => {
    setSuplementos([...suplementos, { tipo: '', dosis: '' }]);
  };

  const handleSuplementoChange = (index, field, value) => {
    const updatedSuplementos = [...suplementos];
    updatedSuplementos[index][field] = value;
    setSuplementos(updatedSuplementos);
  };

  return (
    <div>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Peso Actual (kg):</span>
        <input type="number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" value={peso} onChange={handlePesoChange} placeholder="70" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Estatura (cm):</span>
        <input type="number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" value={estatura} onChange={handleEstaturaChange} placeholder="175" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">¿Ha sido diagnosticado con alguna enfermedad crónica?</span>
        <div className="mt-1">
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="Diabetes" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">Diabetes</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="Hipertensión" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">Hipertensión</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="Hipercolesterolemia" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">Hipercolesterolemia</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="Enfermedades autoinmunes" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">Enfermedades Autoinmunes</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="EPOC" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">EPOC</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="Asma" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">Asma</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="Insuficiencia Renal" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">Insuficiencia Renal</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" value="Otras" onChange={handleEnfermedadesChange} className="form-checkbox" />
            <span className="ml-2">Otras</span>
          </label>
        </div>
        {enfermedades.includes("Otras") && (
          <input type="text" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Especifique otras enfermedades" value={otraEnfermedad} onChange={(e) => setOtraEnfermedad(e.target.value)} />
        )}
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Historial de enfermedades infecciosas recurrentes recientemente:</span>
        <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" value={historialEnfermedades} onChange={(e) => setHistorialEnfermedades(e.target.value)}>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </label>

      {historialEnfermedades === "si" && (
        <>
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Alergias o Intolerancias Alimentarias (ejemplo: gluten, lactosa):</span>
            <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Describa alergias o intolerancias" value={alergias} onChange={(e) => setAlergias(e.target.value)} />
          </label>

          {/* Medicamentos Actuales */}
          <div className="mb-4">
            <span className="text-gray-700 font-medium">Medicamentos Actuales:</span>
            {medicamentos.map((medicamento, index) => (
              <div key={index} className="flex space-x-4 mt-2">
                <input
                  type="text"
                  className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Nombre"
                  value={medicamento.nombre}
                  onChange={(e) => handleMedicamentoChange(index, 'nombre', e.target.value)}
                />
                <input
                  type="text"
                  className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Dosis"
                  value={medicamento.dosis}
                  onChange={(e) => handleMedicamentoChange(index, 'dosis', e.target.value)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addMedicamento}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              + Añadir Medicamento
            </button>
          </div>

          {/* Suplementos Nutricionales */}
          <div className="mb-4">
            <span className="text-gray-700 font-medium">Suplementos Nutricionales:</span>
            {suplementos.map((suplemento, index) => (
              <div key={index} className="flex space-x-4 mt-2">
                <input
                  type="text"
                  className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Tipo (Ej: Vitaminas)"
                  value={suplemento.tipo}
                  onChange={(e) => handleSuplementoChange(index, 'tipo', e.target.value)}
                />
                <input
                  type="text"
                  className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Dosis"
                  value={suplemento.dosis}
                  onChange={(e) => handleSuplementoChange(index, 'dosis', e.target.value)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addSuplemento}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 transition duration-200"
            >
              + Añadir Suplemento
            </button>
          </div>
        </>
      )}
    </div>
  );
}
