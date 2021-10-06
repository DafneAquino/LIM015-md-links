#!/usr/bin/env node

const { mdLinks } = require('./mdlinks');
const option = require('./options');
const colors = require('colors');

// Para que a futuro la matriz de argumentos inicie en el índice 2 como posición
const arguments = process.argv.slice(2);

// Si el usuario pone un argumento
if (arguments.length === 1){
    mdLinks(arguments[0], { validate:false })
    .then(resul=>resul.forEach(e=> console.log(
        `link : ${colors.blue(e.href)}
text: ${colors.yellow(e.text)}
file: ${colors.cyan(e.file)}`
     )))
    .catch(err => console.log(err));
}


// Si el usuario pone 2 argumentos
if(arguments.length === 2){
    switch (arguments[1]) {
        case '--validate':
            mdLinks(arguments[0], { validate: true })
            .then(res => res.forEach(el =>
                console.log(`link : ${colors.blue(el.href)} 
text: ${colors.yellow(el.text)} 
file: ${colors.cyan(el.file)} 
status: ${colors.green(el.status)} 
message: ${colors.yellow(el.message)}`
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