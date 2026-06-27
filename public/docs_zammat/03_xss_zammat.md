# 🛡️ Análisis de Vulnerabilidad: XSS Reflejado (Cross-Site Scripting)

**Auditor Técnico:** Matías Zamora  
**Empresa Auditada:** ViajaYa (Agencia de Viajes Online)  
**Identificador de Trazabilidad:** 03_xss_zammat  
**Ambiente de Pruebas:** DVWA (Security Level: Low)

---

## 1. Evidencia de Explotación en el Laboratorio
El ataque se ejecutó con éxito en el módulo "XSS (Reflected)" de la plataforma de pruebas DVWA. Al ingresar el payload malicioso, el navegador lo interpretó inmediatamente de forma activa.

* **Payload Utilizado:** `<script>alert('XSS')</script>`
* **Imagen de Evidencia:** `![Evidencia XSS](img_zammat/xss_zammat.png)`

> **Pie descriptivo:** La captura demuestra la inyección directa del script dentro del formulario de entrada de texto del portal, gatillando de inmediato una ventana emergente ("pop-up") con la palabra 'XSS' en el navegador de la víctima.

---

## 2. Explicación Técnica (¿Por qué funciona?)
La vulnerabilidad ocurre porque el portal de clientes de ViajaYa recibe datos proporcionados por el usuario (el parámetro de texto) y los incluye directamente en la respuesta HTTP devuelta, reflejándolos de vuelta en el código HTML de la página sin realizar ningún tipo de validación previa, saneamiento o codificación de caracteres especiales (como `<` o `>`). El navegador de la víctima interpreta estos caracteres como etiquetas HTML legítimas de ejecución de scripts, ejecutando el código malicioso en el contexto de seguridad de la sesión del usuario.

---

## 3. Puntuación y Severidad CVSS v3.1
Utilizando la calculadora oficial de FIRST, se ha determinado el siguiente vector y puntaje:

* **Vector CVSS v3.1:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`
* **Puntaje Base:** **6.1**
* **Severidad:** **Media (Medium)**

### Justificación de la Métrica:
* **Vector de Ataque (AV:N):** Red (Network), explotable de forma remota mediante un enlace modificado enviado a la víctima.
* **Complejidad de Ataque (AC:L):** Baja, no requiere condiciones especiales.
* **Privilegios Requeridos (PR:N):** Ninguno, cualquier usuario no autenticado puede ser blanco.
* **Interacción del Usuario (UI:R):** Requerida, la víctima debe hacer clic en el enlace infectado.
* **Alcance (S:C):** Cambiado, ya que el script se ejecuta en el navegador de la víctima pero bajo el dominio/origen del servidor vulnerable.
* **Impacto (C:L / I:L / A:N):** Confidencialidad e Integridad Bajas (permite secuestro de sesiones/cookies), Disponibilidad Ninguna.

---

## 4. Política de Prevención (Raíz)
* **Control Esencial:** Implementar codificación de salida contextual (Context-Aware Output Encoding) en el servidor. Todos los datos dinámicos reflejados en el HTML deben sanitizarse convirtiendo caracteres especiales en entidades HTML seguras (por ejemplo, transformar `<` en `&lt;` y `>` en `&gt;`).
* **Marco de Referencia:** Alineado con la guía de mitigación de XSS de **OWASP Top 10 (A03:2021-Injection)**.

---

## 5. Control de Mitigación (Defensa en Capas)
* **Medida Tecnológica:** Configurar la cabecera HTTP **Content Security Policy (CSP)** en el servidor de producción. Una política estricta como `default-src 'self'; script-src 'self';` impedirá de raíz que el navegador ejecute cualquier script arbitrario o malicioso que intente inyectarse de forma externa, neutralizando por completo el impacto del ataque aunque la vulnerabilidad exista en el código.