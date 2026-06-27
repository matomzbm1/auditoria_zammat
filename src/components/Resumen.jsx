import React from 'react';

export default function Resumen() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">📌 Resumen Ejecutivo</h2>
        <p className="text-slate-600 mt-2 text-lg">
          Portal institucional de auditoría de seguridad para la plataforma web de <strong className="text-slate-900">ViajaYa</strong>.
        </p>
      </div>

      <hr className="border-slate-200" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
          <h3 className="text-xs font-bold text-sky-600 uppercase tracking-wider">Contexto de Negocio</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Este informe consolida el análisis técnico de vulnerabilidades críticas simuladas sobre el entorno controlado DVWA (nivel de seguridad bajo), mapeando el impacto directo sobre los activos esenciales custodiados por el portal: **Pasaportes**, **pagos** e **itinerarios**.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ficha Técnica de Evaluación</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Auditor Técnico:</strong> Matías Zamora</li>
            <li><strong>Organización:</strong> INACAP Valparaíso — Otoño 2026[cite: 2]</li>
            <li><strong>Asignatura:</strong> Fundamentos de Seguridad de la Información[cite: 2]</li>
            <li><strong>Identificador de Trazabilidad:</strong> auditoria_zammat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}