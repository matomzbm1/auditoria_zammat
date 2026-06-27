# 📊 01: Mapeo Inicial de Inyecciones y Defectos de Entrada

**Auditor Técnico:** Matías Zamora  
**Empresa Auditada:** ViajaYa  
**Identificador de Trazabilidad:** 01_sql_zammat  
**Estándar Base:** OWASP Top 10 - A03:2021 (Injection)

---

## 1. Introducción al Vector de Inyección
Las fallas de inyección ocurren cuando se envían datos no confiables a un intérprete como parte de un comando o consulta. Los datos maliciosos del atacante pueden engañar al intérprete para que ejecute comandos involuntarios o acceda a datos sin la debida autorización.

En el portal de **ViajaYa**, las superficies de ataque identificadas y testeadas en el laboratorio bajo este vector corresponden a:
1. **Inyección SQL (Módulo Autenticación/Búsqueda):** Manipulación de sentencias relacionales.
2. **Inyección de Comandos (Módulo Diagnóstico):** Manipulación de instrucciones del sistema operativo (OS).

---

## 2. Diagrama de Flujo del Fallo vs. Control Seguro
El comportamiento del portal frente a la entrada de datos se resume en el siguiente flujo lógico: