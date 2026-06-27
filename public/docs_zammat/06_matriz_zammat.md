# 📈 06: Matriz de Riesgo y Calculadora de Impacto (Escala 5x5)

**Auditor Técnico:** Matías Zamora  
**Empresa Auditada:** ViajaYa  
**Metodología:** Calculadora de Riesgo ($R = P \times I$)  
**Escala:** 1 a 5 (Métrica Profesional)

---

## 1. Definición de la Calculadora de Riesgo
De acuerdo con la rúbrica de evaluación, el nivel de riesgo se determina mediante el producto de dos variables:

### A. Probabilidad (P)
1. **P1 - Muy Baja:** Casi imposible de explotar.
2. **P2 - Baja:** Requiere condiciones muy específicas.
3. **P3 - Media:** Posible, el vector es conocido.
4. **P4 - Alta:** Muy probable, falla de seguridad evidente.
5. **P5 - Muy Alta:** Casi segura, no existen defensas.

### B. Impacto (I)
1. **I1 - Insignificante:** No afecta al negocio.
2. **I2 - Menor:** Afectación leve a datos secundarios.
3. **I3 - Moderado:** Afecta un servicio temporalmente.
4. **I4 - Mayor:** Exposición de datos sensibles (Cookies/PII).
5. **I5 - Catastrófico:** Robo de activos financieros o control del servidor.

---

## 2. Niveles de Criticidad (Umbrales)
*   🟢 **Bajo (1 - 4):** Riesgo aceptable.
*   🟡 **Medio (5 - 9):** Requiere monitoreo.
*   🟠 **Alto (10 - 15):** Mitigación necesaria en corto plazo.
*   🔴 **Crítico (16 - 25):** Mitigación inmediata requerida.

---

## 3. Cuantificación de Hallazgos en ViajaYa

| Amenaza Técnica | Probabilidad (P) | Impacto (I) | Riesgo Total ($P \times I$) | Prioridad |
| :--- | :---: | :---: | :---: | :--- |
| **Inyección SQL** | 4 | 5 | **20** | 🔴 Crítico |
| **Inyección de Comandos** | 4 | 5 | **20** | 🔴 Crítico |
| **XSS Reflejado** | 3 | 4 | **12** | 🟠 Alto |

---

## 4. Justificación Técnica
1. **SQLi y CMD (20):** Se asigna **P4** porque el portal no tiene filtros y **I5** porque permiten el robo de pasaportes (SQLi) y el control total del servidor (CMD). El resultado 20 cae en el cuadrante de **Acción Inmediata**.
2. **XSS (12):** Se asigna **P3** porque requiere interacción del usuario y **I4** porque el impacto es el secuestro de sesiones (Mayor), resultando en un riesgo **Alto**.