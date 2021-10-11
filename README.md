# MarkLink

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Diagrama de Flujo](#2-diagrama-de-flujo)
- [3. Documentación técnica de la librería](#3-documentación-técnica-de-la-librería)
- [4. Guía de uso e instalación de la librería](#4-guía-de-uso-e-instalación-de-la-librería)
- [5. Características técnicas](#5-características-técnicas)

---

## 1. Resumen del proyecto

Este proyecto consta en la creación de una herramienta de línea de comando (CLI) así como una
propia librería (o biblioteca - library) en JavaScript.

Diseñar una librería propia es una experiencia fundamental para cualquier
desarrollador porque obliga a pensar en la interfaz (API) de 
_módulos_ propios
y cómo será usado por otros developers. Se tomó en cuenta especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

## 2. Diagrama de Flujo

![](flujograma/mdLinks-API.png)
![](flujograma/mdLinks-CLI.png)

## 3. Documentación técnica de la librería

- [ ] Puede instalarse via `npm install --marklink <DafneAquino>/md-links`


## 4. Guía de uso e instalación de la librería

file
![](flujograma/file.PNG)

![](flujograma/validate.PNG)
![](flujograma/stats.PNG)
![](flujograma/statsYvalidate.PNG)
![](flujograma/help.PNG)

## 5. Características técnicas

El proyecto se realizó bajo estas características técnicas de javascript y node:

### JavaScript

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Arrays (arreglos)**

    <details><summary>Links</summary><p>

  - [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  - [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  </p></details>

- [x] **Objetos (key, value)**

    <details><summary>Links</summary><p>

  - [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
  </p></details>

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

    <details><summary>Links</summary><p>

  - [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [x] **Funciones (params, args, return)**

    <details><summary>Links</summary><p>

  - [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  - [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  - [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [x] **Recursión o recursividad**

    <details><summary>Links</summary><p>

  - [Píldora recursión - YouTube Laboratoria Developers](https://www.youtube.com/watch?v=lPPgY3HLlhQ)
  - [Recursión o Recursividad - Laboratoria Developers en Medium](https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727)
  </p></details>

- [x] **Módulos de CommonJS**

    <details><summary>Links</summary><p>

  - [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
  </p></details>

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [x] **Callbacks**

    <details><summary>Links</summary><p>

  - [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
  </p></details>

- [x] **Promesas**

    <details><summary>Links</summary><p>

  - [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
  </p></details>

- [x] **Pruebas unitarias (unit tests)**

    <details><summary>Links</summary><p>

  - [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
  </p></details>

- [x] **Pruebas asíncronas**

    <details><summary>Links</summary><p>

  - [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
  </p></details>

- [x] **Uso de mocks y espías**

    <details><summary>Links</summary><p>

  - [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
  </p></details>

- [ ] **Pruebas de compatibilidad en múltiples entornos de ejecución**

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Node.js

- [x] **Instalar y usar módulos con npm**

    <details><summary>Links</summary><p>

  - [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
  </p></details>

- [x] **Configuración de package.json**

    <details><summary>Links</summary><p>

  - [package.json - Documentación oficial (en inglés)](https://docs.npmjs.com/files/package.json)
  </p></details>

- [x] **Configuración de npm-scripts**

    <details><summary>Links</summary><p>

  - [scripts - Documentación oficial (en inglés)](https://docs.npmjs.com/misc/scripts)
  </p></details>

- [x] **process (env, argv, stdin-stdout-stderr, exit-code)**

    <details><summary>Links</summary><p>

  - [Process - Documentación oficial (en inglés)](https://nodejs.org/api/process.html)
  </p></details>

- [x] **File system (fs, path)**

    <details><summary>Links</summary><p>

  - [File system - Documentación oficial (en inglés)](https://nodejs.org/api/fs.html)
  - [Path - Documentación oficial (en inglés)](https://nodejs.org/api/path.html)
  </p></details>

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

    <details><summary>Links</summary><p>

  - [Sitio oficial de GitHub Pages](https://pages.github.com/)
  </p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [x] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [x] **Consulta o petición (request) y respuesta (response).**

    <details><summary>Links</summary><p>

  - [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  - [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
  </p></details>

- [x] **Codigos de status de HTTP**

    <details><summary>Links</summary><p>

  - [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  - [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
  </p></details>
