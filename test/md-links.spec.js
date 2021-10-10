const { mdLinks } = require('../src/mdlinks.js');

describe('mdLinks', () => {
  it('is a function', () => {
      expect(typeof mdLinks).toBe('function');
  });
  
  it('should return an array of objects with the links\' properties as "href", "text", "file" if the options aren\'t validated', ()=>{
     const output =  [
      {
        href: 'https://www.it-swarm-es.com/es/node.js/tiene-problemas-para-entender-como-funciona-fs.stat/941185365/',
        text: 'linknumero2',
        file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\condicionales.md'
      },
      {
        href: 'https://www.it-swarm-es.com',
        text: 'linknumero1',
        file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\cortos.md'
      },
      {
        href: 'https://nodejs.org/api/fs.html#fs_class_fs_statss',
        text: 'link',
        file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\fail.md'
      },
      {
        href: 'https://nodejs.org/api/fs.html#fs_class_fs_stats',
        text: 'FS',
        file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\happy.md'
      }
    ];
    //   fetch.mockResolvedValue()
      const resultado = mdLinks('D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1', { validate: false });
      resultado.then((res) => expect(res).toEqual(output));      
  });

  it('should return an array of objects with properties as "href", "text", "file", "status", "message" if the options aren\'t validated',() => {
      const output2 = [
        {
          href: 'https://www.it-swarm-es.com/es/node.js/tiene-problemas-para-entender-como-funciona-fs.stat/941185365/',
          text: 'linknumero2',
          file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\condicionales.md',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://www.it-swarm-es.com',
          text: 'linknumero1',
          file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\cortos.md',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://nodejs.org/api/fs.html#fs_class_fs_statss',
          text: 'link',
          file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\fail.md',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://nodejs.org/api/fs.html#fs_class_fs_stats',
          text: 'FS',
          file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\happy.md',
          status: 200,
          message: 'OK'
        }
      ];
      const resultado2 = mdLinks('D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1', { validate: true });
        resultado2.then((resul) => expect(resul).toEqual(output2));
  });
  it('should return a warning message', ()=>{
    const resultado3 = mdLinks('pruebaa\\text.md')
    resultado3.then((e)=> expect(e).toBe('Path does not exist')).catch((e)=>e);
  });
});