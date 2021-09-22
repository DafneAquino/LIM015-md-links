const fs = require('fs');
const path = require('path');

// Validar si existe la ruta
const routeExistence = (route) => fs.existsSync(route);

// Validar si la ruta es absoluta o no
const pathValidate = (route) => path.isAbsolute(route); // Devuelve un booleano true or false

// Convertir la ruta a absoluta
// const convertRoute = (route) => path.resolve(route)

// Validar y convertir si la ruta no es absoluta
const routeState = (route) => !path.isAbsolute(route) ? path.resolve(route) : route

// Validar si la ruta es una carpeta 
const routeIsDir =(route) => fs.statSync(route).isDirectory();

// Validar si es una archivo
const routeIsFile =(route) => fs.statSync(route).isFile();

// Validar en que extension acaba la ruta (a futuro para reconocer si  es un archivo m.d)
const routeIsMd = (route) => path.extname(route)
// console.log(routeIsMd('D:\\Laboratoria\\LIM015-md-links\\README.md'));

// Leer el contenido de un directorio o carpeta (devuelve rutas fragmentadas de los archivos o carpetas que tiene ese directorio)
const readDir = (route) => fs.readdirSync(route);
// console.log(readDir('D:/Laboratoria/LIM015-md-links/prueba'));

// Unir dos rutas fragmentadas: ruta del directorio + ruta de cada uno de los archivos
const joinPaths = (route) => {
    return readDir(route).map((elemento) => path.join(route, elemento));
};
console.log(joinPaths('D:/Laboratoria/LIM015-md-links/prueba'));

// Funcion para unir la ruta de archivos .md segmentados para que conforme su ruta total



// 

module.exports = {
    routeExistence,
    pathValidate,
    routeState,
    routeIsFile,
    routeIsDir
}; 