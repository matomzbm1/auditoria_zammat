# 🛡️ Análisis de Vulnerabilidad: Inyección SQL (SQL Injection)

**Auditor Técnico:** Matías Zamora  
**Empresa Auditada:** ViajaYa (Agencia de Viajes Online)  
**Identificador de Trazabilidad:** 02_sqli_zammat  
**Ambiente de Pruebas:** DVWA (Security Level: Low)

---

## 1. Evidencia de Explotación en el Laboratorio
El ataque se ejecutó con éxito en el formulario de autenticación y consulta del módulo "SQL Injection" de la plataforma DVWA. 

* **Payload Utilizado:** `' OR '1'='1`
* **Imagen de Evidencia:** `![Evidencia SQLi](img_zammat/sqli_zammat.png)`

> **Pie descriptivo:** La captura demuestra el bypass absoluto de los mecanismos de consulta. Al ingresar la comilla simple seguida de una condición lógica que siempre es verdadera (`1=1`), el motor de la base de datos ignora el filtro de usuario y devuelve la totalidad de los registros de la tabla de manera masiva.

---

## 2. Explicación Técnica (¿Por qué funciona?)
La vulnerabilidad existe porque el backend del portal web de ViajaYa construye las consultas SQL mediante **concatenación directa de strings** utilizando los datos crudos que digita el usuario, sin saneamiento previo. 

A nivel de código, el servidor ejecuta algo similar a:
`SELECT * FROM usuarios WHERE id_usuario = 'INPUT_USER';`

Al ingresar el payload `' OR '1'='1`, la consulta se altera lógicamente en el motor de la base de datos, transformándose en:
`SELECT * FROM usuarios WHERE id_usuario = '' OR '1'='1';`

Como la condición `'1'='1'` siempre es verdadera (True), la cláusula `WHERE` se invalida como filtro de seguridad, forzando al motor relacional a exponer y retornar todas las filas de la tabla de datos.

---

## 3. Puntuación y Severidad CVSS v3.1
Utilizando la calculadora oficial de FIRST, se ha determinado el siguiente vector y puntaje:

* **Vector CVSS v3.1:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:L`
* **Puntaje Base:** **9.4**
* **Severidad:** 🔴 **Crítica (Critical)**

### Justificación de la Métrica:
* **Vector de Ataque (AV:N):** Red (Network), explotable de forma remota a través del formulario web público.
* **Complejidad de Ataque (AC:L):** Baja, el vector es trivial y no requiere condiciones especiales del entorno.
* **Privilegios Requeridos (PR:N) / Interacción (UI:N):** Ninguno; no se necesita credenciales previas ni la ayuda de un usuario interno.
* **Alcance (S:U):** Sin cambios (Unchanged), el ataque compromete los datos gestionados por el mismo motor SQL.
* **Impacto (C:H / I:H / A:L):** Confidencialidad e Integridad Máximas (Alta), ya que permite descargar la base de datos completa y modificar registros (eliminar pasajes o alterar identidades). Disponibilidad Baja.

---

## 4. Política de Prevención (Raíz)
* **Control Esencial:** Implementar **Consultas Parametrizadas y Sentencias Preparadas (Prepared Statements)** mediante objetos seguros como PDO en PHP o JPA en Java. Esto asegura que el motor de la base de datos trate la entrada del usuario estrictamente como un parámetro de texto (un string literal) y jamás como código SQL ejecutable, anulando el ataque de raíz.
* **Marco de Referencia:** Alineado con **OWASP Top 10 (A03:2021-Injection)**.

---

## 5. Control de Mitigación (Defensa en Capas)
* **Medida Tecnológica:** Aplicar el principio de menor privilegio a la cuenta de conexión de la base de datos (por ejemplo, el usuario web no debe poseer privilegios de administrador del motor como `DBA` o `root`, impidiendo la ejecución de comandos destructivos como `DROP TABLE`). Complementariamente, activar firmas de inspección SQL en el WAF (Web Application Firewall).