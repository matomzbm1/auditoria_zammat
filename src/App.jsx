import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import Matriz from './components/Matriz';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');

  const menu = [
    { id: 'resumen', label: '📌 Resumen Ejecutivo' },
    { id: 'sqli', label: '🛡️ Inyección SQL' },
    { id: 'xss', label: '🛡️ XSS Reflejado' },
    { id: 'comandos', label: '🛡️ Inyección de Comandos' },
    { id: 'activos', label: '📊 Activos de Información' },
    { id: 'matriz', label: '📈 Matriz de Riesgo' },
    { id: 'controles', label: '🛠️ Prevención y Mitigación' },
    { id: 'recuperacion', label: '🔄 Plan de Recuperación' },
    { id: 'prompts', label: '🤖 Bitácora de IA' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* Menú Lateral Fijo con Colores Claros */}
      <aside className="w-64 bg-white border-r border-slate-200 fixed top-0 bottom-0 left-0 flex flex-col z-20 shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <h1 className="text-lg font-black tracking-wider text-slate-900 uppercase">ViajaYa Security</h1>
          <p className="text-xs text-sky-600 font-semibold mt-0.5">Auditoría: Matías Zamora</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Secciones</p>
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setSeccionActiva(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center ${
                seccionActiva === item.id
                  ? 'bg-sky-50 text-sky-700 font-bold border-l-4 border-sky-600 pl-2'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase">ID: auditoria_zammat</span>
        </div>
      </aside>

      {/* Contenedor de Contenido Principal Alineado con Margen Izquierdo Compensado */}
      <div className="flex-1 pl-64 flex flex-col justify-between min-h-screen">
        <main className="p-8 max-w-4xl w-full mx-auto my-4">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            {seccionActiva === 'resumen' && <Resumen />}
            {seccionActiva === 'sqli' && <InyeccionSQL />}
            {seccionActiva === 'xss' && <XSS />}
            {seccionActiva === 'comandos' && <Comandos />}
            {seccionActiva === 'activos' && <Activos />}
            {seccionActiva === 'matriz' && <Matriz />}
            {seccionActiva === 'controles' && <Controles />}
            {seccionActiva === 'recuperacion' && <Recuperacion />}
            {seccionActiva === 'prompts' && <Prompts />}
          </div>
        </main>

        <footer className="w-full py-4 border-t border-slate-200 bg-white text-center text-xs text-slate-400 font-medium">
          Fundamentos de Seguridad de la Información — INACAP Valparaíso 2026
        </footer>
      </div>

    </div>
  );
}