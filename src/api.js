const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

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
const routeExtension = (route) => path.extname(route);

// Leer el contenido de un directorio o carpeta (devuelve rutas fragmentadas de los archivos o carpetas que tiene ese directorio)
const readDir = (route) => fs.readdirSync(route);
// console.log(readDir('D:\\Laboratoria\\LIM015-md-links\\prueba'));

// Unir dos rutas fragmentadas: ruta del directorio + ruta de cada uno de los archivos
const joinPaths = (route) => {
    return readDir(route).map((elemento) => path.join(route, elemento));
};

// Leer contenido de archivos .md
const fileContent =(route) =>  fs.readFileSync(route,'utf8');

/* Función recursiva para obtener la ruta absoluta de archivos '.md' 
(al obtener la ruta de archivos x la via normal su ruta es relativa x ejem solo devuelve: 'links.md') 
devuelve un array con elementos que son las rutas absolutas de archivos .md*/ 
const mdFilesPath = (route) => {
    let arrayMdFiles = [];
    const pathAbsolute = routeState(route);
    if(routeIsFile(pathAbsolute) && routeExtension(pathAbsolute)==='.md'){
        arrayMdFiles.push(pathAbsolute);
    } else if (routeIsDir(pathAbsolute)) {
        joinPaths(pathAbsolute).forEach(element => {
            const mdFiles = mdFilesPath(element); // ira rellenando en un array los archivos .md encontrados en un dir
            arrayMdFiles = arrayMdFiles.concat(mdFiles); // al terminar de buscar en cada dir, todos los arrays generados con archivos .md, se concatenaran en unsolo array.
        });        
    };
    return arrayMdFiles;
};
// console.log(mdFilesPath('D:/Laboratoria/LIM015-md-links/prueba'));

// Expresiones regulares para reconocer la estructura de los links
const regexAllLink = /\[([^\[]+)\](\(.*\))/gm;
const regexText = /\[([\w\s\d.()]+)\]/g;
const regexLink = /\((((ftp|http|https):\/\/)[\w\d\s./?=#&_%~,\-.:]+)\)/g;

// Función para obtener los links con sus propiedades de los archivos '.md' en un array
const propsLink = (route) => {
    const arrayProp = [];// array donde guardaremos los datos de los links
    mdFilesPath(route).forEach((eachRouteMd) => {
        const readEachMd = fileContent(eachRouteMd);// Obtiene o lee cada link completo del archivo .md evaluado
        const fitLinkAll = readEachMd.match(regexAllLink);// Nos da un array con links que cumplen con la estructura de acuerdo a la exp regular declarada
        if(readEachMd.length > 0 && regexAllLink.test(readEachMd) === true){
            fitLinkAll.forEach((e)=>{
                const linkProp = { // objeto donde iran las propiedades del link .md
                    href: e.match(regexLink).toString().slice(1,-1),
                    text: e.match(regexText).join().slice(1,-1),
                    file: eachRouteMd,
                };
                arrayProp.push(linkProp); // se le agrega el objeto de prop al array vacio
            });
        } else if (!regexAllLink.test(readEachMd)){
          console.log("No links found");
        }
    });
    return arrayProp;
};

// Función que devuelve una promesa para obtener el status y las propiedades completas de los links en caso si sean validadas las options
const getStatusLink = (arrayPropLinks) => {
    const arrayLinks = arrayPropLinks.map((elemento) => 
      fetch(elemento.href)
        .then((res) => {
          const data = {
            href: elemento.href,
            text: elemento.text, // jala el key "text" del objeto anterior 
            file: elemento.file,
            status: res.status, // el método status pertenece a fetch y devuelve un number 
            message: res.status >= 200 && res.status <= 299 ? 'OK' : 'fail', // Normalmente cuando el status de la peticion http da un numero con base 2 significa que la peticion ha tenido éxito
          };
          return data;
        }).catch((error) => {
          const data = {
            href: elemento.href,
            text: elemento.text,
            file: elemento.file,
            status: 'Error ' + error,
            message: 'fail'
          };
          return (data);
        }));
    return Promise.all(arrayLinks);
  };

// console.log(getStatusLink(propsLink('D:/Laboratoria/LIM015-md-links/prueba')));
// const statusLink = getStatusLink(propsLink('D:/Laboratoria/LIM015-md-links/prueba'));
// statusLink.then( res => console.log(res)).catch( error => console.log(error));

module.exports = {
    routeExistence,
    pathValidate,
    routeState,
    routeIsFile,
    routeIsDir,
    routeExtension,
    readDir,
    joinPaths,
    fileContent,
    mdFilesPath,
    propsLink,
    getStatusLink
}; 