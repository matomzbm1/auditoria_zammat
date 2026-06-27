import React from 'react';

export default function InyeccionSQL() {
  return (
    <div className="space-y-6">
      {/* Encabezado Principal */}
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">🛡️ Inyección SQL (SQL Injection)</h2>
        <p className="text-slate-500 mt-1">Análisis de explotación por manipulación de consultas y exfiltración de bases de datos de ViajaYa.</p>
      </div>

      <hr className="border-slate-200" />

      {/* Grid de Contenido Principal */}
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Bloque Técnico Izquierdo */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Explicación Técnica del Hallazgo</h3>
            <p className="text-sm text-slate-600 leading-relaxed space-y-2">
              La vulnerabilidad se origina debido a que el backend concatena directamente en texto plano los datos ingresados por el cliente para estructurar las consultas a la base de datos. Al introducir caracteres de control lógico como <code className="bg-slate-200 px-1 py-0.5 rounded text-red-600 font-mono">' OR '1'='1</code>, el motor relacional rompe el filtro original del inicio de sesión y se ve forzado a retornar la totalidad de los registros de los usuarios.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Políticas de Defensa y Mitigación (Marcos OWASP)</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-sky-700 uppercase">🛡/ 1. Prevención Raíz (Código Seguro):</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Uso obligatorio y estricto de **Sentencias Preparadas (Prepared Statements)**. Al parametrizar las consultas, el motor SQL interpreta el payload del atacante como un simple texto plano inofensivo y no como instrucciones de comandos lógicos.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-700 uppercase">🛠/ 2. Mitigación en Capas (Infraestructura):</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Configurar la cuenta de conexión del aplicativo web con los mínimos privilegios requeridos (Read/Write básico), bloqueando accesos a tablas del sistema operativo o comandos de destrucción estructural como <code>DROP</code>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque CVSS Derecho */}
        <div className="bg-red-50/60 p-5 rounded-xl border border-red-200/70 h-fit space-y-3">
          <h3 className="text-xs font-black text-red-800 uppercase tracking-widest text-center">Clasificación de Gravedad</h3>
          <div className="text-center py-4 bg-white border border-red-200 rounded-lg shadow-sm">
            <span className="block text-4xl font-black text-red-600">9.4</span>
            <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">Severidad: Crítica</span>
          </div>
          <div className="text-[11px] text-red-900 space-y-1 bg-white/50 p-3 rounded-md border border-amber-100">
            <p><strong>Vector CVSS v3.1:</strong></p>
            <p className="font-mono bg-red-100/70 p-1 rounded text-center text-[10px] select-all overflow-x-auto">
              CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:L
            </p>
          </div>
        </div>

      </div>

      {/* Sección de la Evidencia Visual */}
      <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm space-y-2">
        <h3 className="text-sm font-bold text-slate-700">Evidencia de Explotación en Laboratorio</h3>
        
        <img 
          src="/docs_zammat/img_zammat/sqli_zammat.png" 
          alt="Evidencia Inyección SQL" 
          className="w-full border border-slate-200 rounded-lg max-h-[400px] object-contain bg-slate-50"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/600x400/e2e8f0/475569?text=Evidencia+SQLi+en+public/docs_zammat/img_zammat/";
          }}
        />
        
        <p className="text-xs text-slate-500 italic mt-1">
          <strong>Foco de la captura:</strong> Demostración de bypass mediante payload para evadir las sentencias de control, exponiendo la base de datos de pasaportes y clientes del negocio.
        </p>
      </div>
    </div>
  );
}