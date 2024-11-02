import { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import MedicalHistory from './components/MedicalHistory';
import Goals from './components/Goals';
import EatingHabits from './components/EatingHabits';
import Activity from './components/Activity';
import SleepAndStress from './components/SleepAndStress';
import Lifestyle from './components/Lifestyle';
import HormonalHealth from './components/HormonalHealth';
import DiagnosticTests from './components/DiagnosticTests';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">{sections[currentStep].title}</h2>
        <Section />
        <div className="flex justify-between mt-4">
          <button
            onClick={goBack}
            className="px-4 py-2 bg-gray-300 text-white rounded-md"
            disabled={currentStep === 0}
          >
            Anterior
          </button>
          <button
            onClick={goNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            disabled={currentStep === sections.length - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
