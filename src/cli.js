#!/usr/bin/env node

const mdLinks = require('./mdlinks');
const option = require('./options');
const colors = require('colors');

// Para que a futuro la matriz de argumentos inicie en el índice 2
const arguments = process.argv.slice(2);
// console.log(arguments.length);
// console.log(`Hola mundo ${arguments}`);

// Si el usuario pone un argumento
if (arguments.length === 1){
    mdLinks(arguments[0], { validate:false })
    .then(resul=>resul.forEach(e=> console.log(
        `${colors.blue(e.href)}
        ${colors.yellow(e.text)}
        ${colors.pink(e.file)}`
     )))
    .catch(err => console.log(err));
}


// Si el usuario pone 2 argumentos
if(arguments.length === 2){
    switch (arguments[1]) {
        case '--validate':
            mdLinks(arguments[0], { validate: true })
            .then(res => res.forEach(el => console.log(
                `${colors.blue(el.href)} 
                 ${colors.yellow(el.text)} 
                 ${colors.pink(el.file)} 
                 ${colors.green(el.status)} 
                 ${colors.yellow(el.message)}`
             )))
            .catch(err => console.log(err));
        break;

        case '--stats':
            mdLinks(arguments[0], { validate: true })
            .then(res=> console.log(
                `${colors.blue(option.totalLinks(res))} 
                ${colors.yellow(option.uniqueLinks(res))}`
             ))
            .catch(err => console.log(err));
        break;

        case '--help':
            console.log(`${option.help}`);
        break;

        default: console.log(colors.brightRed('Sorry, the command does not exist. Try with command "--help" '));
        break;
    };

};

// Si el usuario pone 3 argumentos

if(arguments.length === 3){
    if ( arguments[1]=== '--stats' && arguments[2] === '--validate'){
        mdLinks(arguments[0], { validate: true })
            .then(res=> console.log(`
            ${colors.blue(option.totalLinks(res))} 
            ${colors.yellow(option.uniqueLinks(res))} 
            ${colors.pink(option.brokenLinks(res))}`
            ))
            .catch(err => console.log(err));
        break;
    }
    else{
        console.log('Sorry, the command does not exist. Try with command "--help"')
    }
}