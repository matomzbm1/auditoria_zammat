# 🔄 Plan de Continuidad, Mejoras Tecnológicas y Recuperación (DRP)

**Auditor Técnico:** Matías Zamora  
**Identificador de Trazabilidad:** 08_recuperacion_zammat  
**Estándar de Referencia:** ISO/IEC 27031 / NIST SP 800-34

---

## 1. Mejoras Tecnológicas de Infraestructura
Para robustecer la arquitectura del portal e-commerce de ViajaYa frente a los riesgos analizados:

* **Web Application Firewall (WAF):** Despliegue de un WAF perimetral (ej. Cloudflare o AWS WAF) configurado con las reglas base de OWASP (CRS). Esto bloqueará de manera automatizada payloads de inyección SQL, XSS y caracteres delimitadores del shell antes de que toquen el servidor web.
* **Segmentación de Red y endurecimiento:** Aislamiento del servidor de aplicaciones del servidor de base de datos de producción mediante zonas desmilitarizadas (DMZ) y firewalls internos, impidiendo movimientos laterales en caso de un compromiso de comandos.

---

## 2. Plan de Recuperación ante Desastres (DRP)
En caso de que un ataque crítico destruya o comprometa la disponibilidad de los activos (como el borrado de la base de datos de pasaportes), se activa el protocolo de contingencia:

1. **Estrategia de Respaldos (Backup):** Respaldos automatizados incrementales diarios y copias completas semanales de la base de datos y llaves de API, almacenados de forma cifrada en un repositorio aislado del proveedor de nube (Políticas de retención de 30 días).
2. **Aislamiento y Mitigación Inmediata:** Desconexión controlada del nodo afectado y redirección del tráfico a una página de mantenimiento segura.
3. **Restauración y Levantamiento:** Despliegue automatizado de la infraestructura limpia mediante código (IaC) y restauración del último backup validado. Tiempo objetivo de recuperación (RTO) < 4 horas.
4. **Notificación:** Comunicación regulada con las pasarelas de pago asociadas (Transbank) y clientes afectados si se sospecha exfiltración de PII.