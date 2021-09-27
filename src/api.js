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
const routeExtension = (route) => path.extname(route)
// console.log(routeExtension('D:\\Laboratoria\\LIM015-md-links\\README.md'));

// Leer el contenido de un directorio o carpeta (devuelve rutas fragmentadas de los archivos o carpetas que tiene ese directorio)
const readDir = (route) => fs.readdirSync(route);
// console.log(readDir('D:/Laboratoria/LIM015-md-links/prueba'));

// Unir dos rutas fragmentadas: ruta del directorio + ruta de cada uno de los archivos
const joinPaths = (route) => {
    return readDir(route).map((elemento) => path.join(route, elemento));
};
// console.log(joinPaths('D:/Laboratoria/LIM015-md-links/prueba'));

// Leer contenido de archivos .md
const mdContent =(route) =>  fs.readFileSync(route, 'utf8')/* .toString(); */
// console.log(mdContent('D:/Laboratoria/LIM015-md-links/prueba/carpeta1/condicionales.md'))

/* Función recursiva para obtener la ruta absoluta de archivos '.md' 
(al obtener la ruta de archivos x la via normal su ruta es relativa x ejem solo devuelve: 'links.md') */ 
const mdFilesPath = (route) => {
    let arrayMdFiles = [];
    const pathAbsolute = routeState(route);
    if(routeIsFile(pathAbsolute) && routeExtension(pathAbsolute)==='.md'){
        arrayMdFiles.push(pathAbsolute);
    } else if (routeIsDir(pathAbsolute) /* && readDir(pathAbsolute).length > 0 */) {
        joinPaths(pathAbsolute).forEach(element => {
            const mdFiles = mdFilesPath(element); // ira rellenando en un array los archivos .md encontrados en un dir
            arrayMdFiles = arrayMdFiles.concat(mdFiles); // al terminar de buscar en cada dir, todos los arrays generados con archivos .md, se concatenaran en unsolo array.
        });        
    };
    return arrayMdFiles;
};
// console.log(mdFilesPath('D:/Laboratoria/LIM015-md-links/prueba'));

// Sacar los links de los archivos '.md'
const regexAllLink = /^\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)$/g;
const regexText = /\[([\w\s\d.()]+)\]/g;
const regexLink = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/g;

const mdLinksProp = (route) => {
    const propsLinkMd = [];// array donde guardaremos los datos de los links
    mdFilesPath(route).forEach((eachRouteMd) => {
        const readEachMd = mdContent(eachRouteMd);// Obtiene o lee cada link completo del archivo .md evaluado
        console .log(readEachMd)
        const fitLinkAll = readEachMd.match(regexAllLink);// Nos da un array con links que cumplen con la estructura de acuerdo a la exp regular declarada 
        // console .log(fitLinkAll);
        if(readEachMd.length > 0 && regexAllLink.test(readEachMd) === true){
            fitLinkAll.forEach((e)=>{
                const linkProp = { // objetto donde iran las propiedades del link .md
                    href: e.match(regexLink),
                    text: e.match(regexText),
                    file: eachRouteMd
                };
                console.log(linkProp);
                propsLinkMd.push(linkProp); // se le agrega el objeto de prop al array vacio
            });
        };
    });
    return propsLinkMd;
};
console.log(mdLinksProp('D:/Laboratoria/LIM015-md-links/prueba'));
//NO ESTAN FUNCIONANDO LOS PATRONES DE LAS EXPRESIONES REGULARES , BUSCAR NUEVOS PATRONES




// 

module.exports = {
    routeExistence,
    pathValidate,
    routeState,
    routeIsFile,
    routeIsDir,
    routeExtension,
    readDir,
    joinPaths
}; 