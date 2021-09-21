const fs = require('fs');
const path = require('path');

// Validar si existe la ruta
const routeExistence = (route) => fs.existsSync(route);

// console.log(routeExistence('D:\\Laboratoria\\LIM015-md-links\\README.md'))
// console.log(routeExistence('prueba\\text.md'))

// Validar si la ruta es absoluta o no
const pathValidate = (route) => path.isAbsolute(route); // Devuelve un booleano true or false

// Convertir la ruta a absoluta
// const convertRoute = (route) => path.resolve(route)

// Validar y convertir si la ruta no es absoluta
const routeState = (route) => !path.isAbsolute(route) ? path.resolve(route) : route

// Validar si la ruta es una carpeta o directorio
const routeIsDir =(route) => fs.statSync(route).isDirectory();

// Validar si es una archivo
const routeIsFile =(route) => fs.statSync(route).isFile();

// Validar si  es un archivo m.d
const routeIsMd = (route) => path.extname(route)
console.log(routeIsMd('D:\\Laboratoria\\LIM015-md-links\\README.md'));

// Recorrer los archivos en caso sea una carpeta


// Leer archivos de una ruta fija


// 

module.exports = {
    routeExistence,
    pathValidate,
    routeState,
    routeIsFile,
    routeIsDir
}; 