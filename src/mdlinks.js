const functions = require ('./api.js');

/* const mdLinks = (path, options={}) =>{
    new Promise ((resolve, reject) => {
        if(functions.routeExistence(path) && !options.validate){
            resolve(functions.propsLink(path));
        }
        else if (functions.routeExistence(path) && options.validate ){
            const arrayLinkProp = functions.propsLink(path); 
            const statusLinks = functions.getStatusLink(arrayLinkProp);
            statusLinks.then((resul) => resolve(resul));
        }
        else if (!(functions.routeExistence(path))) {
            reject ("Path does not exist");
        };
    });
}; */

/* const mdLinks = (path, options={}) => {
    new Promise ((resolve, reject) => {
        if(functions.routeExistence(path)){
            const arrayLinkProp = functions.propsLink(path); 
            const statusLinks = functions.getStatusLink(arrayLinkProp);
            if(options.validate){
                statusLinks.then((resul) => resolve(resul));
            } else {
                resolve(arrayLinkProp);
            }
        } else {
            reject ('Path does not exist');
        }
    })
} */

const mdLinks = (path, option ={}) => 
    new Promise ((resolve, reject) => {
        if(!functions.routeExistence(path)){
            reject('Path does not exist');
        } else {
            const linkProp = functions.propsLink(path);
            if(!(option.validate)){
                resolve(linkProp);
            } else {
                const statusLink = functions.getStatusLink(linkProp);
                statusLink.then((resul) => resolve(resul));
            }
        }

    });


const resultado = mdLinks('D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1', { validate: true })
/* resultado.then((resul) => {
  console.log (resul);
}); */
console.log(resultado);

module.exports = { mdLinks }