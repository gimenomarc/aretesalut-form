import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import PersonalInfo from './components/PersonalInfo';
import MedicalHistory from './components/MedicalHistory';
import Goals from './components/Goals';
import EatingHabits from './components/EatingHabits';
import Activity from './components/Activity';
import SleepAndStress from './components/SleepAndStress';
import Lifestyle from './components/Lifestyle';
import HormonalHealth from './components/HormonalHealth';
import DiagnosticTests from './components/DiagnosticTests';
import logo from './assets/logo.png';

const sections = [
  { component: PersonalInfo, title: 'Información Personal' },
  { component: MedicalHistory, title: 'Antecedentes Médicos' },
  { component: Goals, title: 'Objetivos y Expectativas' },
  { component: EatingHabits, title: 'Hábitos Alimenticios' },
  { component: Activity, title: 'Actividad Física' },
  { component: SleepAndStress, title: 'Sueño y Estrés' },
  { component: Lifestyle, title: 'Hábitos y Estilo de Vida' },
  { component: HormonalHealth, title: 'Salud Hormonal' },
  { component: DiagnosticTests, title: 'Pruebas Diagnósticas' },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  
  const Section = sections[currentStep].component;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-200">
      <img src={logo} alt="Logo" className="mb-6 w-50 h-auto" />
      
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-700">{sections[currentStep].title}</h2>
        <Section />
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
