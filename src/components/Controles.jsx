import React from 'react';

export default function Controles() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">🛠️ Prevención y Mitigación</h2>
        <p className="text-slate-500 mt-1">Estrategias de desarrollo seguro y controles en capas alineados con OWASP Top 10.</p>
      </div>

      <hr className="border-slate-200" />

      <div className="space-y-4">
        {/* Tarjeta 1: Prevención Raíz */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-sky-50 text-sky-600 rounded-lg border border-sky-100 font-bold text-sm">🔒 Raíz</span>
            <h3 className="text-base font-bold text-slate-800">Políticas de Prevención en Código</h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Directrices mandatorias implementadas directamente en el ciclo de vida de desarrollo de software (SDLC) para eliminar las fallas desde su origen físico.
          </p>
          <ul className="text-xs text-slate-600 space-y-2 pl-4 list-disc">
            <li><strong>Consultas Parametrizadas:</strong> Uso obligatorio de Sentencias Preparadas (Prepared Statements) en el backend para desarmar la Inyección SQL.</li>
            <li><strong>Sanitización Contextual:</strong> Codificación estricta de variables de salida en el lado del cliente (Front-end) antes de renderizar entradas dynamic, neutralizando XSS.</li>
          </ul>
        </div>

        {/* Tarjeta 2: Mitigación en Capas */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 font-bold text-sm">🛡️ Defensa</span>
            <h3 className="text-base font-bold text-slate-800">Controles de Mitigación (Defensa en Capas)</h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Medidas defensivas aplicadas en el entorno operativo para entorpecer los vectores remotos y reducir la probabilidad de éxito de un atacante.
          </p>
          <ul className="text-xs text-slate-600 space-y-2 pl-4 list-disc">
            <li><strong>Listas Blancas (Whitelisting):</strong> Restricción estricta mediante expresiones regulares en los campos de entrada de datos (ej. solo números y puntos para diagnósticos).</li>
            <li><strong>Menor Privilegio Operativo:</strong> Aislamiento de cuentas de ejecución de bases de datos, restringiendo comandos estructurales como <code>DROP</code> o accesos a archivos maestros del sistema.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}