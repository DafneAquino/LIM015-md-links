#!/usr/bin/env node

const { mdLinks } = require('./mdlinks');
const option = require('./options');
const colors = require('colors');

// Para que la matriz de argumentos se corte hasta el índice 2 (y a futuro el indice 3 sea como indice  0)
const arguments = process.argv.slice(2);

// Si el usuario pone un argumento
if (arguments.length === 1){
    mdLinks(arguments[0], { validate:false })
    .then(resul=>resul.forEach(e=> console.log(` ${colors.blue(e.href)} | ${colors.yellow(e.text)} | ${colors.cyan(e.file)}`)))
    .catch(err => console.log(err));
}


// Si el usuario pone 2 argumentos
if(arguments.length === 2){
    switch (arguments[1]) {
        case '--validate':
            mdLinks(arguments[0], { validate: true })
            .then(res => res.forEach(el =>
                console.log(`${colors.blue(el.href)} ${colors.yellow(el.text)}  ${colors.cyan(el.file)}  ${colors.green(el.status)}  ${colors.yellow(el.message)}`)))
            .catch(err => console.log(err));
        break;

        case '--stats':
            mdLinks(arguments[0], { validate: true })
            .then(res=> console.log(
`Total: ${colors.blue(option.totalLinks(res))} 
Unique: ${colors.yellow(option.uniqueLinks(res))}`
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
            .then(res=> console.log(
`Total: ${colors.blue(option.totalLinks(res))} 
Unique: ${colors.yellow(option.uniqueLinks(res))} 
Broken: ${colors.cyan(option.brokenLinks(res))}`
            ))
            .catch(err => console.log(err));
    }
    else{
        console.log(colors.brightRed('Sorry, the command does not exist. Try with command "--help"'))
    }
}