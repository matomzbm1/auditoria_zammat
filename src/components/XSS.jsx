import React from 'react';

export default function XSS() {
  return (
    <div className="space-y-6">
      {/* Encabezado Principal */}
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">🛡️ Cross-Site Scripting (XSS Reflejado)</h2>
        <p className="text-slate-500 mt-1">Análisis técnico de ejecución de código arbitrario en el navegador de clientes de ViajaYa.</p>
      </div>

      <hr className="border-slate-200" />

      {/* Grid de Contenido Principal */}
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Bloque Técnico Izquierdo */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Explicación Técnica del Hallazgo</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              La aplicación de clientes recibe datos directamente del usuario y los incrusta en la respuesta web sin verificar, limpiar o codificar caracteres especiales. Al ingresar etiquetas de script, el navegador las confunde con instrucciones del sistema y las ejecuta de forma inmediata, abriendo la puerta al secuestro de cookies de sesión o phishing interno.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Políticas de Defensa y Mitigación (Marcos OWASP / NIST)</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-sky-700 uppercase">🛡️ Prevención Raíz (Código):</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Aplicar **Context-Aware Output Encoding** en todas las variables que se impriman en el front-end, transformando caracteres de control como <code>&lt;</code> y <code>&gt;</code> en texto plano inofensivo.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-700 uppercase">🛠️ Mitigación Tecnológica (En Capas):</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Implementación de cabeceras de seguridad **Content Security Policy (CSP)** estrictas, restringiendo de manera tajante la ejecución de scripts en línea (inline scripts) no autorizados por la organización.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque CVSS Derecho */}
        <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200/70 h-fit space-y-3">
          <h3 className="text-xs font-black text-amber-800 uppercase tracking-widest text-center">Clasificación de Gravedad</h3>
          <div className="text-center py-4 bg-white border border-amber-200 rounded-lg shadow-sm">
            <span className="block text-4xl font-black text-amber-600">6.1</span>
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Severidad: Media</span>
          </div>
          <div className="text-[11px] text-amber-900 space-y-1 bg-white/50 p-3 rounded-md border border-amber-100">
            <p><strong>Vector CVSS v3.1:</strong></p>
            <p className="font-mono bg-amber-100/70 p-1 rounded text-center text-[10px] select-all overflow-x-auto">
              CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N
            </p>
          </div>
        </div>

      </div>

      {/* Sección de la Evidencia Visual */}
      <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm space-y-2">
        <h3 className="text-sm font-bold text-slate-700">Evidencia de Explotación en Laboratorio</h3>
        
        <img 
          src="/docs_zammat/img_zammat/xss_zammat.png" 
          alt="Evidencia Ataque XSS Reflejado" 
          className="w-full border border-slate-200 rounded-lg max-h-[400px] object-contain bg-slate-50"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/600x400/e2e8f0/475569?text=Guarda+tu+captura+como+xss_zammat.png";
          }}
        />
        
        <p className="text-xs text-slate-500 italic mt-1">
          <strong>Foco de la captura:</strong> Demostración de bypass mediante payload malicioso ejecutor de scripts, logrando levantar el pop-up de alerta dentro de la sesión de ViajaYa.
        </p>
      </div>
    </div>
  );
}