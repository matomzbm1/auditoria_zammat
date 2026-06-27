import React from 'react';

export default function Activos() {
  const activosLista = [
    {
      id: "ACT-01",
      nombre: "Base de Datos de Clientes y Pasaportes (PII)",
      tipo: "Datos Sensibles",
      desc: "Nombres completos, RUT, números de pasaporte y vigencias de los clientes de ViajaYa.",
      confi: "Confidencial (Alto)",
      colorConfi: "text-red-700 bg-red-50 border-red-200",
      vulnerabilidadAsociada: "Inyección SQL (Permite exfiltración masiva de identidades)."
    },
    {
      id: "ACT-02",
      nombre: "Registros Financieros y Tokens de Pago",
      tipo: "Datos Financieros",
      desc: "Historial de transacciones de compra y tokens criptográficos conectados con Transbank/Webpay.",
      confi: "Confidencial (Alto)",
      colorConfi: "text-red-700 bg-red-50 border-red-200",
      vulnerabilidadAsociada: "Inyección SQL (Acceso no autorizado a registros de transacciones comerciales)."
    },
    {
      id: "ACT-03",
      nombre: "Base de Datos de Itinerarios y Reservas Activas",
      tipo: "Logística / Datos",
      desc: "Códigos de reserva de vuelos (PNR), reservas de hoteles y fechas de traslado en tiempo real.",
      confi: "Restringido (Medio-Alto)",
      colorConfi: "text-amber-700 bg-amber-50 border-amber-200",
      vulnerabilidadAsociada: "XSS Reflejado (Secuestro de sesiones de clientes para alterar o espiar viajes)."
    },
    {
      id: "ACT-04",
      nombre: "Credenciales de Acceso e Identidades del Portal",
      tipo: "Seguridad / Accesos",
      desc: "Hashes de contraseñas y registros de inicio de sesión de los usuarios de la plataforma.",
      confi: "Confidencial (Alto)",
      colorConfi: "text-red-700 bg-red-50 border-red-200",
      vulnerabilidadAsociada: "XSS Reflejado (Session Hijacking para el secuestro integral de cuentas de viajeros)."
    },
    {
      id: "ACT-05",
      nombre: "API Keys de Integración Global (GDS / Aerolíneas)",
      tipo: "Software / Credenciales",
      desc: "Llaves criptográficas de interconexión directa con sistemas como Sabre o Amadeus para emisión automatizada.",
      confi: "Confidencial (Alto)",
      colorConfi: "text-red-700 bg-red-50 border-red-200",
      vulnerabilidadAsociada: "Inyección de Comandos (Robo de llaves desde el servidor para emitir pasajes fraudulentos)."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">📊 Inventario de Activos de Información</h2>
        <p className="text-slate-500 mt-1">Identificación, clasificación y mapeo de riesgos de negocio en el portal ViajaYa.</p>
      </div>

      <hr className="border-slate-200" />

      {/* Grid de Tarjetas de Activos */}
      <div className="space-y-4">
        {activosLista.map((activo) => (
          <div key={activo.id} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-150 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {activo.id}
                </span>
                <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  {activo.tipo}
                </span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${activo.colorConfi}`}>
                  🔒 {activo.confi}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800">{activo.nombre}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{activo.desc}</p>
            </div>

            {/* Asociación con la falla técnica */}
            <div className="md:w-72 bg-slate-50 p-3 rounded-lg border border-slate-100 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Impactado Críticamente Por:</span>
              <p className="text-xs font-medium text-slate-700">
                {activo.vulnerabilidadAsociada}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}