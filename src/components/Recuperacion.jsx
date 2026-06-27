import React from 'react';

export default function Recuperacion() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">🔄 Continuidad y Recuperación ante Desastres</h2>
        <p className="text-slate-500 mt-1">Mejoras tecnológicas de infraestructura y resiliencia de servicios críticos para ViajaYa.</p>
      </div>

      <hr className="border-slate-200" />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Bloque Tecnológico */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-sky-600">🚀 Mejoras Tecnológicas</h3>
          <div className="space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-800">Despliegue de WAF (Web Application Firewall):</p>
            <p className="bg-slate-50 p-2.5 rounded border border-slate-100">
              Implementación perimetral (Cloudflare/AWS WAF) para filtrar y bloquear firmas conocidas de inyección SQL, comandos y scripts maliciosos antes de que interactúen con el servidor web.
            </p>
            <p className="font-semibold text-slate-800 pt-1">Segmentación de Entornos de Red:</p>
            <p className="bg-slate-50 p-2.5 rounded border border-slate-100">
              Separación física y lógica entre el servidor web de cara al público y los sistemas centrales de bases de datos que guardan pasaportes y tokens de pago, limitando el alcance de un compromiso.
            </p>
          </div>
        </div>

        {/* Bloque DRP */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-emerald-600">🔄 Plan de Recuperación (DRP)</h3>
          <div className="space-y-3 text-xs text-slate-600">
            <div className="border-l-2 border-emerald-500 pl-2">
              <p className="font-bold text-slate-800">Estrategia de Backups Cifrados:</p>
              <p className="text-slate-500 mt-0.5">Automatización incremental diaria aislada de la red local para evitar ransomware.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-2">
              <p className="font-bold text-slate-800">Aislamiento y Restauración (RTO &lt; 4h):</p>
              <p className="text-slate-500 mt-0.5">Uso de Infraestructura como Código (IaC) para reconstruir servidores limpios y montar las copias de seguridad de forma automatizada en minutos.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-2">
              <p className="font-bold text-slate-800">Protocolo de Comunicación Oficial:</p>
              <p className="text-slate-500 mt-0.5">Notificación inmediata a entidades reguladoras de comercio electrónico y pasarelas financieras contratadas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
