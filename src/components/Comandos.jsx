import React from 'react';

export default function Comandos() {
  return (
    <div className="space-y-6">
      {/* Encabezado Principal */}
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">🛡️ Inyección de Comandos (Command Injection)</h2>
        <p className="text-slate-500 mt-1">Análisis técnico del compromiso total de la infraestructura y el sistema operativo del servidor.</p>
      </div>

      <hr className="border-slate-200" />

      {/* Grid de Contenido Principal */}
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Bloque Técnico Izquierdo */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Explicación Técnica del Hallazgo</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              La vulnerabilidad se produce cuando la aplicación pasa datos ingresados por el cliente directamente al intérprete de comandos del sistema operativo (el shell) sin previa validación. Al insertar caracteres divisores como un punto y coma (<code>;</code>), el servidor ejecuta las funciones consecutivas deseadas por el atacante, comprometiendo gravemente la confidencialidad del software.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Políticas de Defensa y Mitigación (Marcos OWASP / NIST)</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-sky-700 uppercase">🛡️ Prevención Raíz (Código):</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Reemplazar funciones de consola nativas (como <code>shell_exec</code>) por APIs internas del framework web. Implementar sanitización rigurosa bajo listas blancas estrictas que descarten meta-caracteres del shell.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-700 uppercase">🛠️ Mitigación Tecnológica (En Capas):</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Restringir los privilegios del usuario ejecutor del servicio web (ej. cuenta <code>www-data</code>) para impedir el acceso a binarios críticos del sistema y directorios ajenos al hosting del portal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque CVSS Derecho */}
        <div className="bg-red-50/60 p-5 rounded-xl border border-red-200/70 h-fit space-y-3">
          <h3 className="text-xs font-black text-red-800 uppercase tracking-widest text-center">Clasificación de Gravedad</h3>
          <div className="text-center py-4 bg-white border border-red-200 rounded-lg shadow-sm">
            <span className="block text-4xl font-black text-red-600">10.0</span>
            <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">Severidad: Crítica</span>
          </div>
          <div className="text-[11px] text-red-900 space-y-1 bg-white/50 p-3 rounded-md border border-red-100">
            <p><strong>Vector CVSS v3.1:</strong></p>
            <p className="font-mono bg-red-100/70 p-1 rounded text-center text-[10px] select-all overflow-x-auto">
              CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
            </p>
          </div>
        </div>

      </div>

      {/* Sección de la Evidencia Visual */}
      <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm space-y-2">
        <h3 className="text-sm font-bold text-slate-700">Evidencia de Explotación en Laboratorio</h3>
        
        <img 
          src="/docs_zammat/img_zammat/comandos_zammat.png" 
          alt="Evidencia Inyección de Comandos" 
          className="w-full border border-slate-200 rounded-lg max-h-[400px] object-contain bg-slate-50"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/600x400/e2e8f0/475569?text=Guarda+tu+captura+como+comandos_zammat.png";
          }}
        />
        
        <p className="text-xs text-slate-500 italic mt-1">
          <strong>Foco de la captura:</strong> Concatenación de comandos mediante uso del delimitador de instrucciones, extrayendo de forma ilegal el archivo maestro de identidades del servidor.
        </p>
      </div>
    </div>
  );
}