# 🛡️ Análisis de Vulnerabilidad: Inyección de Comandos (Command Injection)

**Auditor Técnico:** Matías Zamora  
**Empresa Auditada:** ViajaYa (Agencia de Viajes Online)  
**Identificador de Trazabilidad:** 04_comandos_zammat  
**Ambiente de Pruebas:** DVWA (Security Level: Low)

---

## 1. Evidencia de Explotación en el Laboratorio
El ataque se ejecutó en el módulo "Command Injection" de DVWA, el cual simula una herramienta interna de diagnóstico de red (Ping).

* **Payload Utilizado:** `127.0.0.1; cat /etc/passwd`
* **Imagen de Evidencia:** `![Evidencia Inyección de Comandos](img_zammat/comandos_zammat.png)`

> **Pie descriptivo:** La captura demuestra cómo el operador, utilizando el delimitador de comandos del sistema operativo (`;`), logra evadir la función original de la caja de texto (hacer un ping) y obliga al servidor web a ejecutar un comando secundario (`cat`), exponiendo el archivo de cuentas de usuarios del sistema operativo subyacente.

---

## 2. Explicación Técnica (¿Por qué funciona?)
La aplicación web toma la entrada proporcionada por el usuario (la dirección IP) y la concatena de forma directa dentro de una cadena de texto que se ejecuta en la consola del servidor del sistema operativo mediante una función ejecutable (como `shell_exec()`, `exec()` o `system()` en PHP). Debido a la ausencia absoluta de mecanismos de validación de entrada o de filtros por listas blancas, el intérprete de comandos procesa caracteres delimitadores como `;`, `&&` o `|`, ejecutando cualquier instrucción adicional adjuntada por el atacante bajo los privilegios del proceso del servidor web (ej. `www-data`).

---

## 3. Puntuación y Severidad CVSS v3.1
Utilizando la calculadora oficial de FIRST, se ha determinado el siguiente vector y puntaje:

* **Vector CVSS v3.1:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H`
* **Puntaje Base:** **10.0**
* **Severidad:** 🔴 **Crítica (Critical)**

### Justificación de la Métrica:
* **Vector de Ataque (AV:N):** Red (Network), explotable de forma remota sin necesidad de acceso físico.
* **Complejidad de Ataque (AC:L):** Baja, no se requieren configuraciones especiales en el entorno.
* **Privilegios Requeridos (PR:N) / Interacción (UI:N):** Ninguno; no se necesita autenticación ni la ayuda de ninguna víctima.
* **Alcance (S:C):** Cambiado, el atacante toma el control del software e impacta directamente los recursos lógicos del sistema operativo anfitrión.
* **Impacto (C:H / I:H / A:H):** Confidencialidad, Integridad y Disponibilidad Máximas. El atacante puede leer archivos confidenciales, alterar los fuentes de ViajaYa o bajar por completo el servidor web.

---

## 4. Política de Prevención (Raíz)
* **Control Esencial:** Evitar completamente el uso de funciones de ejecución del sistema operativo alimentadas por datos de entrada de los usuarios. En caso de ser indispensable, se debe implementar una **lista blanca estricta (White-listing)** que solo admita el formato de expresiones regulares exactas (ej. permitir únicamente dígitos y puntos pertenecientes a una IP válida) rechazando cualquier meta-carácter del shell.
* **Marco de Referencia:** Alineado con **OWASP Top 10 (A03:2021-Injection)**.

---

## 5. Control de Mitigación (Defensa en Capas)
* **Medida Tecnológica:** Aplicar el **Principio del Menor Privilegio (Least Privilege)** a nivel de infraestructura. El proceso que corre el servidor web jamás debe ser administrado como usuario `root` o administrador. Debe ejecutarse con una cuenta de servicio altamente restringida (ej. `www-data`) sin permisos de escritura en directorios del sistema ni acceso a binarios sensibles del shell.