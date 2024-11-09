import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import PersonalInfo from './components/InformacionPersonal';
import MedicalHistory from './components/AntecedentesMedicos';
import ObjetivosExpectativas from './components/ObjetivosExpectativas';
import MotivacionCompromiso from './components/MotivacionCompromiso';
import HabitosAlimenticios from './components/HabitosAlimenticios';
import HistorialDigestivo from './components/HistorialDigestivo';
import ActividadFisica from './components/ActividadFisica';
import EvaluacionSueno from './components/EvaluacionSueno';
import EstresSaludMental from './components/EstresSaludMental';
import HabitosSociales from './components/HabitosSociales';
import EvaluacionLaboralAmbiental from './components/EvaluacionLaboralAmbiental';
import SaludHormonal from './components/SaludHormonal';
import ComentariosAdicionales from './components/ComentariosAdicionales';
import logo from './assets/logo.png';

const sections = [
  { component: PersonalInfo, title: 'Información Personal' },
  { component: MedicalHistory, title: 'Antecedentes Médicos' },
  { component: ObjetivosExpectativas, title: 'Objetivos y Expectativas' },
  { component: MotivacionCompromiso, title: 'Motivación y Compromiso' },
  { component: HabitosAlimenticios, title: 'Hábitos Alimenticios y Registro Alimentario' },
  { component: HistorialDigestivo, title: 'Historial Digestivo' },
  { component: ActividadFisica, title: 'Actividad Física' },
  { component: EvaluacionSueno, title: 'Evaluación del Sueño y Ritmo Circadiano' },
  { component: EstresSaludMental, title: 'Estrés y Salud Mental' },
  { component: HabitosSociales, title: 'Hábitos Sociales y de Estilo de Vida' },
  { component: EvaluacionLaboralAmbiental, title: 'Evaluación Laboral y Ambiental' },
  { component: SaludHormonal, title: 'Salud Hormonal y Reproductiva' },
  { component: ComentariosAdicionales, title: 'Comentarios Adicionales' }, // Última sección
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [genero, setGenero] = useState(''); // Estado para almacenar el género

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const Section = sections[currentStep].component;

  const sectionProps = currentStep === 0 ? { setGenero } : { genero }; // Pasar setGenero solo en el paso 0

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-200">
      <img src={logo} alt="Logo" className="mb-6 w-40 h-auto" />
      
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-700">{sections[currentStep].title}</h2>
        <Section {...sectionProps} />
        <div className="flex justify-between mt-6">
          <button
            onClick={goBack}
            className={`flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md transition-all duration-200 hover:bg-indigo-500 focus:ring focus:ring-indigo-300 ${
              currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentStep === 0}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Anterior
          </button>
          <button
            onClick={goNext}
            className={`flex items-center px-4 py-2 bg-purple-600 text-white rounded-md transition-all duration-200 hover:bg-purple-500 focus:ring focus:ring-purple-300 ${
              currentStep === sections.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentStep === sections.length - 1}
          >
            Siguiente
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
