import React, { useState } from 'react';

export default function Matriz() {
  const [riesgoSeleccionado, setRiesgoSeleccionado] = useState(null);

  // Datos de los hallazgos según la escala 5x5
  const riesgos = [
    { 
      id: 'SQL', 
      nombre: 'Inyección SQL', 
      p: 4, 
      i: 5, 
      val: 20, 
      clase: 'Crítico', 
      colorBadge: 'bg-rose-955 text-rose-400 border-rose-800/60',
      activos: 'Base de Datos de Clientes, Pasaportes (PII) y Registros de Pago',
      just: 'Probabilidad Alta (4): El formulario web concatena variables dinámicas directamente sin previa preparación. Impacto Catastrófico (5): Permite la exfiltración íntegra de la base de datos de clientes de ViajaYa.'
    },
    { 
      id: 'CMD', 
      nombre: 'Inyección de Comandos (OS)', 
      p: 4, 
      i: 5, 
      val: 20, 
      clase: 'Crítico', 
      colorBadge: 'bg-rose-955 text-rose-400 border-rose-800/60',
      activos: 'API Keys de Aerolíneas e Infraestructura del Servidor',
      just: 'Probabilidad Alta (4): El script de diagnóstico de red acepta meta-caracteres del shell de forma directa. Impacto Catastrófico (5): Compromiso total de la consola de administración con privilegios del sistema operativo.'
    },
    { 
      id: 'XSS', 
      nombre: 'XSS Reflejado', 
      p: 3, 
      i: 4, 
      val: 12, 
      clase: 'Alto', 
      colorBadge: 'bg-amber-955 text-amber-400 border-amber-800/60',
      activos: 'Credenciales de Acceso y Sesiones de Clientes',
      just: 'Probabilidad Media (3): El reflejo de parámetros carece de codificación HTML contextual, requiriendo ingeniería social activa. Impacto Mayor (4): Permite el secuestro de cookies de sesión (Session Hijacking) de usuarios activos.'
    },
  ];

  const getCellColor = (p, i) => {
    const val = p * i;
    if (val >= 16) return 'bg-rose-950/30 text-rose-400 border-rose-900/50 hover:bg-rose-950/50'; 
    if (val >= 10) return 'bg-amber-950/30 text-amber-400 border-amber-900/50 hover:bg-amber-950/50'; 
    if (val >= 5)  return 'bg-sky-950/30 text-sky-400 border-sky-900/50 hover:bg-sky-950/50';   
    return 'bg-emerald-950/20 text-emerald-400 border-emerald-900/40 hover:bg-emerald-950/40'; 
  };

  // NUEVA LÓGICA: Maneja el intercambio de elementos en celdas compartidas (SQL y CMD)
  const manejarClickCelda = (itemsAqui) => {
    if (itemsAqui.length === 0) return;
    
    if (itemsAqui.length > 1) {
      // Si hay más de un riesgo (ej: SQL y CMD en el 20)
      const indiceActual = itemsAqui.findIndex(r => r.id === riesgoSeleccionado?.id);
      // Si no estaba seleccionado ninguno o estaba el último, muestra el primero. Si no, muestra el siguiente.
      const siguienteIndice = (indiceActual === -1 || indiceActual === itemsAqui.length - 1) ? 0 : indiceActual + 1;
      setRiesgoSeleccionado(itemsAqui[siguienteIndice]);
    } else {
      // Si hay un solo riesgo (ej: XSS en el 12)
      setRiesgoSeleccionado(itemsAqui[0]);
    }
  };

  const rows = [5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-6 pb-6 animate-fade-in">
      {/* Encabezado */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">📊 Matriz de Riesgo Operacional</h2>
        <p className="text-sm text-slate-400 mt-0.5">Cuantificación Probabilidad x Impacto bajo escala profesional 5x5.</p>
      </div>

      <hr className="border-slate-700/50" />

      {/* Grid Principal */}
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        
        {/* CONTENEDOR DE LA MATRIZ */}
        <div className="lg:col-span-7 p-5 rounded-xl border border-slate-700/50 shadow-sm space-y-4 bg-slate-900/50">
          <div className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Mapa de Calor Interactivo
          </div>

          <div className="grid grid-cols-[45px_repeat(5,1fr)] gap-1.5 w-full">
            <div className="h-10"></div>
            {/* Headers de Impacto */}
            {cols.map(c => (
              <div key={c} className="bg-slate-800/60 text-slate-300 flex items-center justify-center text-xs font-bold rounded-lg border border-slate-700/50 h-10">
                I{c}
              </div>
            ))}

            {/* Construcción de las Filas de la Matriz */}
            {rows.map(p => (
              <React.Fragment key={p}>
                {/* Header de Probabilidad lateral */}
                <div className="bg-slate-800/60 text-slate-300 flex items-center justify-center text-xs font-bold rounded-lg border border-slate-700/50 h-14">
                  P{p}
                </div>
                
                {/* Celdas de Cuadrantes */}
                {cols.map(i => {
                  const val = p * i;
                  const itemsAqui = riesgos.filter(r => r.p === p && r.i === i);

                  return (
                    <div 
                      key={i}
                      onClick={() => manejarClickCelda(itemsAqui)}
                      className={`h-14 border rounded-lg flex flex-col items-center justify-center text-xs font-bold transition-all duration-150 relative ${getCellColor(p, i)} ${itemsAqui.length > 0 ? 'ring-2 ring-slate-500/40 cursor-pointer scale-[1.02] shadow-md shadow-black/20' : ''}`}
                    >
                      <span>{val}</span>
                      
                      {/* Burbujas flotantes de los hallazgos en modo noche */}
                      {itemsAqui.length > 0 && (
                        <div className="absolute -bottom-1.5 flex gap-0.5 justify-center z-10 w-full overflow-hidden px-1">
                          {itemsAqui.map(item => (
                            <span key={item.id} className="text-[8px] font-black px-1.5 py-0.2 bg-slate-100 text-slate-900 rounded shadow-sm scale-90 border border-slate-300">
                              {item.id}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>

          {/* Indicadores de Ejes */}
          <div className="flex justify-between items-center px-2 pt-2 text-[10px] font-medium text-slate-400">
            <span>Y: Probabilidad (P1 - P5)</span>
            <span>X: Impacto (I1 - I5)</span>
          </div>

          {/* Leyenda Pastel Noche */}
          <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-[10px] font-semibold text-center">
            <div className="p-1.5 bg-emerald-950/30 text-emerald-400 rounded-md border border-emerald-900/40">1-4 Bajo</div>
            <div className="p-1.5 bg-sky-950/30 text-sky-400 rounded-md border border-sky-900/40">5-9 Medio</div>
            <div className="p-1.5 bg-amber-950/30 text-amber-400 rounded-md border border-amber-900/40">10-15 Alto</div>
            <div className="p-1.5 bg-rose-950/30 text-rose-400 rounded-md border border-rose-100">16-25 Crítico</div>
          </div>
        </div>

        {/* COMPONENTE DE DETALLE LATERAL ARMONIZADO */}
        <div className="lg:col-span-5 bg-slate-900/40 p-5 rounded-xl border border-slate-700/40 min-h-[300px] flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">🔍 Información del Hallazgo</h3>
            
            {riesgoSeleccionado ? (
              <div className="space-y-3.5 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300 rounded">
                    R-{riesgoSeleccionado.id}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border ${riesgoSeleccionado.colorBadge}`}>
                    Riesgo: {riesgoSeleccionado.val} ({riesgoSeleccionado.clase})
                  </span>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-200">{riesgoSeleccionado.nombre}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Activos: <span className="text-slate-300">{riesgoSeleccionado.activos}</span></p>
                </div>

                <div className="text-xs space-y-2 pt-2 border-t border-slate-800">
                  <p className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed text-slate-300">
                    {riesgoSeleccionado.just}
                  </p>
                </div>

              {riesgos.filter(r => r.p === riesgoSeleccionado.p && r.i === riesgoSeleccionado.i).length > 1 && (
                <p className="text-[10px] text-sky-400 animate-pulse text-center pt-1 font-medium">
                  ℹ️ Presiona la celda otra vez para alternar con la otra amenaza.
                </p>
              )}
              </div>
            ) : (
              <div className="text-center py-16 text-slate-500 text-xs italic">
                Haz clic sobre un cuadrante marcado con siglas (SQL, CMD, XSS) para desplegar los detalles exigidos por la pauta.
              </div>
            )}
          </div>

          {riesgoSeleccionado && (
            <button 
              onClick={() => setRiesgoSeleccionado(null)}
              className="mt-4 w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold rounded-lg transition-colors shadow-sm"
            >
              Cerrar Detalle
            </button>
          )}
        </div>

      </div>

      {/* SECCIÓN INFORMATIVA DE LA CALCULADORA */}
      <div className="p-5 rounded-xl border border-slate-700/50 shadow-sm space-y-3 bg-slate-900/30">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">🧮 Lógica de la Calculadora de Riesgo</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          El nivel de criticidad se calcula utilizando la fórmula estándar de la rúbrica institucional: <strong className="text-sky-400">Riesgo = Probabilidad (P) × Impacto (I)</strong>. El resultado numérico se mapea directamente en la escala 5x5 para determinar la prioridad del tratamiento de la vulnerabilidad en el negocio de <strong>ViajaYa</strong>.
        </p>
      </div>
    </div>
  );
}