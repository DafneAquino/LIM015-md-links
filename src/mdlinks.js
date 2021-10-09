const functions = require ('./api.js');

const mdLinks = (path, option ={}) => {
    return new Promise ((resolve, reject) => {
        if(!functions.routeExistence(path)){
            reject('Path does not exist');
        } else {
            const linkProp = functions.propsLink(path);
            if(!(option.validate)){
                resolve(linkProp);
            } else {
                const statusLink = functions.getStatusLink(linkProp);
                resolve(statusLink);
            }
        }

    });
}


// const resultado = mdLinks('D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1', { validate: true })
// resultado
// .then((resul) => console.log (resul))
// .catch((err)=> console.log(err));


module.exports = { mdLinks };