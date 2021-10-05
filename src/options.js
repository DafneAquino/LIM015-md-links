/* Función para obtener la cantidad total de los links(guardados como objetos en un array) encontrados en la ruta*/
const totalLinks = (arrayLinks) => `Total: ${arrayLinks.lenght}`;

// Función para obtener la cantidad de los links unicos(unique) encontrados en la ruta
const uniqueLinks = (arrayLinks) => {
    const linksSet = new Set ([]);// almacena valores únicos irrepetibles
    arrayLinks.forEach((element) => linksSet.add(element.href));
    return `Unique: ${newSet.size}`
};

// Función para obtener la cantidad de los links rotos(broken) encontrados en la ruta
const brokenLinks = (arrayLinks) => {
    const broken = arrayLinks.filter((e)=> e.status >= 400 );
    return `Broken: ${broken.lenght}`
};