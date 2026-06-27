import React from 'react';

export default function Prompts() {
  const bitacora = [
    {
      fase: "Fase 1: Estructuración y Maquetado",
      prompt: "Actúa como un experto en ciberseguridad y React. Necesito estructurar un informe de auditoría web para una agencia de viajes llamada ViajaYa basado en vulnerabilidades explotadas en DVWA. Dame una estructura de componentes limpia con Tailwind CSS v4 utilizando tonos claros para no contrastar con capturas de fondo blanco.",
      resultado: "Estructura base del proyecto con enrutador dinámico en App.jsx y separación de componentes en src/components/, garantizando un diseño scannable y limpio."
    },
    {
      fase: "Fase 2: Resolución de Errores de Tailwind v4",
      prompt: "Tengo un error en index.css, las directivas @tailwind base salían en amarillo y el menú se superponía desalineado en la pantalla. ¿Cómo se configura en la v4?",
      resultado: "Corrección de las directivas antiguas reemplazándolas por el nuevo estándar `@import 'tailwindcss';` e instalación del viewport correcto en index.html, solucionando el colapso del menú lateral fixed."
    },
    {
      fase: "Fase 3: Gestión de Rutas y Renderizado de Imágenes",
      prompt: "Vite me da un error [plugin:vite:import-analysis] Failed to resolve import al intentar cargar la captura de pantalla de SQLi desde components. ¿Cuál es la ruta correcta para la carpeta public?",
      resultado: "Migración de la lógica de carga a rutas absolutas directas (`/docs_zammat/img_zammat/...`). Esto permitió que el navegador cargue las imágenes estáticas directamente desde la raíz virtual, cumpliendo con la estructura de archivos solicitada por la rúbrica del profesor Rubén."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">🤖 Bitácora de Prompts y Uso de IA</h2>
        <p className="text-slate-500 mt-1">Registro transparente del uso ético de Inteligencia Artificial como copiloto de desarrollo e ingeniería.</p>
      </div>

      <hr className="border-slate-200" />

      {/* Flujo de Prompts */}
      <div className="space-y-6">
        {bitacora.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{item.fase}</span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded">Prompt #{idx + 1}</span>
            </div>
            
            <div className="p-5 space-y-4 text-xs">
              {/* Bloque Prompt */}
              <div className="space-y-1">
                <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px] block">💬 Instrucción / Prompt Enviado:</span>
                <p className="text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 font-mono italic">
                  "{item.prompt}"
                </p>
              </div>

              {/* Bloque Solución */}
              <div className="space-y-1">
                <span className="font-bold text-emerald-600 uppercase tracking-widest text-[10px] block">🛠️ Solución / Co-Diseño Implementado:</span>
                <p className="text-slate-600 leading-relaxed pl-1">
                  {item.resultado}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}