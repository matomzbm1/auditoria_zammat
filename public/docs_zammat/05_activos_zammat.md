# 📊 Gestión de Activos de Información y Riesgos Asociados

**Auditor Técnico:** Matías Zamora  
**Empresa Auditada:** ViajaYa (Agencia de Viajes Online)  
**Identificador de Trazabilidad:** 05_activos_zammat  
**Rubro Comercial:** E-commerce / Agencia de Viajes Online (Pasaportes, pagos, itinerarios)

---

## 1. Inventario y Clasificación de Activos de Información
De acuerdo con el análisis de los procesos del portal web de ViajaYa, se identifican y clasifican cinco (5) activos esenciales para la continuidad operativa, el cumplimiento legal y la reputación de la agencia:

### Activo 1: Base de Datos de Clientes y Pasaportes (PII)
* **Tipo:** Activo de Software / Datos.
* **Descripción:** Almacena los Datos de Identificación Personal (PII) de los viajeros: nombres completos, RUT/Pasaporte, fechas de vencimiento y datos de contacto.
* **Clasificación de Confidencialidad:** 🔴 Confidencial (Alto).

### Activo 2: Registros Financieros y Tokens de Transacciones de Pago
* **Tipo:** Activo de Datos.
* **Descripción:** Datos históricos de pagos, transacciones autorizadas y tokens criptográficos de comunicación segura con pasarelas integradas (como Transbank o Webpay).
* **Clasificación de Confidencialidad:** 🔴 Confidencial (Alto).

### Activo 3: Base de Datos de Itinerarios, Vuelos y Reservas Activas
* **Tipo:** Activo de Software / Datos.
* **Descripción:** Registro logístico en tiempo real de los destinos elegidos, hoteles reservados, horarios de vuelos y códigos de reserva (PNR) de los pasajeros.
* **Clasificación de Confidencialidad:** 🟠 Restringido (Medio-Alto).

### Activo 4: Credenciales de Acceso e Identidades del Portal de Clientes
* **Tipo:** Activo de Datos / Seguridad.
* **Descripción:** Tabla con hashes de contraseñas, nombres de usuario y tokens de sesión activa que permiten a los viajeros gestionar o cancelar sus itinerarios.
* **Clasificación de Confidencialidad:** 🔴 Confidencial (Alto).

### Activo 5: API Keys de Integración con Sistemas Globales de Distribución (GDS)
* **Tipo:** Activo de Software / Credenciales de Sistema.
* **Descripción:** Llaves criptográficas de autenticación que conectan el backend de ViajaYa con proveedores mayoristas externos (como Sabre o Amadeus) para la emisión instantánea de boletos de avión.
* **Clasificación de Confidencialidad:** 🔴 Confidencial (Alto).

---

## 2. Asociación de Vulnerabilidades a los Activos
Para dimensionar el riesgo real en el negocio de ViajaYa, se asocian las tres fallas técnicas demostradas en DVWA con los activos que ponen en peligro directo:

1. **Inyección SQL ➡️ Pone en riesgo directo a:** *Activo 1 (Pasaportes) y Activo 2 (Pagos).*
   * **Impacto:** Al romper la lógica de las consultas, un atacante puede extraer y exfiltrar de manera masiva los números de pasaporte de clientes y el historial de tarjetas, causando multas millonarias y demandas civiles por robo de identidad.
2. **XSS Reflejado ➡️ Pone en riesgo directo a:** *Activo 3 (Itinerarios) y Activo 4 (Credenciales).*
   * **Impacto:** Permite el robo de cookies de sesión activa. Con esto, el cibercriminal suplanta al usuario, accediendo a sus itinerarios de viaje en tiempo real (violando la privacidad física del pasajero) o alterando sus reservas vigentes.
3. **Inyección de Comandos ➡️ Pone en riesgo directo a:** *Activo 5 (API Keys) y la Infraestructura Completa.*
   * **Impacto:** Al tomar el control de la consola del servidor, el atacante puede leer los archivos de variables de entorno y extraer las API Keys con las aerolíneas. Esto permitiría la emisión ilícita de pasajes aéreos a gran escala, quebrando económicamente a la agencia.