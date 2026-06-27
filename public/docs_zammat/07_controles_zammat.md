# 🛠️ Políticas de Prevención y Controles de Mitigación

**Auditor Técnico:** Matías Zamora  
**Empresa Auditada:** ViajaYa  
**Identificador de Trazabilidad:** 07_controles_zammat  
**Marcos de Referencia:** OWASP Top 10 / NIST SP 800-53

---

## 1. Políticas de Prevención (Raíz)
Basado en la priorización de la matriz de riesgo (donde la Inyección de Comandos y la Inyección SQL representan riesgos críticos de valor 9), se dictaminan las siguientes directrices de desarrollo seguro:

* **Política para Inyecciones (SQLi y CMD):** Queda estrictamente prohibido el uso de consultas SQL construidas mediante concatenación de strings y la ejecución de funciones nativas del shell (`shell_exec`, `system`) que manipulen entradas del usuario. Toda consulta debe implementar **Parámetros Preparados (PDO / Prepared Statements)**.
* **Política para XSS Reflejado:** Todo dato dinámico renderizado en el portal de clientes debe pasar por una capa obligatoria de **Codificación de Salida Contextual (Context-Aware Output Encoding)**, neutralizando caracteres de control HTML.

---

## 2. Controles de Mitigación (Defensa en Capas)
Como salvaguardas operativas complementarias para proteger los activos de ViajaYa:

1. **Filtros de Entrada Eficientes:** Implementación de validaciones basadas estrictamente en **listas blancas (Whitelisting)** mediante expresiones regulares (Regex) para formularios críticos (como búsquedas de vuelos o ingresos de ID de transacciones).
2. **Principio de Menor Privilegio:** Las cuentas de usuario de la base de datos y los procesos del servidor web deben operar con permisos mínimos de ejecución (ej. denegar permisos de lectura sobre `/etc/passwd` o tablas ajenas al negocio).