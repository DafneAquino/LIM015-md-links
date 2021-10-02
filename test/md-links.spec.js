const { routeExistence,
  pathValidate,
  routeState,
  routeIsDir,
  routeIsFile,
  routeExtension,
  readDir,
  joinPaths,
  mdContent,
  mdFilesPath,
  mdLinksProp
 } = require('../src/api.js');

describe('routeExistence', () => {
  it('is a function', () => {
    expect(typeof routeExistence).toBe('function');
  });
  it('should return true if route exists', () => {
    expect(routeExistence('D:\\Laboratoria\\LIM015-md-links\\README.md')).toBe(true);
  });
  it('should return false if route does not exist', () => {
    expect(routeExistence('D:\\Laboratoria\\LIM015-md-links\\READMEEE.md')).toBe(false);
  })

});

describe('pathValidate', () =>{
  it('is a function', ()=>{
    expect(typeof pathValidate).toBe('function');
  });
  it('should return true if route is absolute', () => {
    expect(pathValidate('D:\\Laboratoria\\LIM015-md-links\\prueba')).toBe(true);
  });
  it('should return false if route is not abslute', () => {
    expect(pathValidate('prueba')).toBe(false);
  });
})

describe('routeState', () => {
  it('is a function', () => {
    expect(typeof routeState).toBe('function');
  });
  it('should return an absolute path or route', () => {
    expect(routeState('README.md')).toBe('D:\\Laboratoria\\LIM015-md-links\\README.md');
  });
});

describe('routeIsDir', () => {
  it('should return true if the route is a directory', () => {
    expect(routeIsDir('D:\\Laboratoria\\LIM015-md-links\\prueba')).toBe(true);
  });
  it('should return false if the route is not a directory', () => {
    expect(routeIsDir('D:\\Laboratoria\\LIM015-md-links\\prueba\\links.txt')).toBe(false);
  });
});

describe('routeIsFile', () => {
  it('should return true if the route is a file', () => {
    expect(routeIsFile('D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md')).toBeTruthy;
  });
  it('should return false if the route is not a file', () => {
    expect(routeIsFile('D:\\Laboratoria\\LIM015-md-links\\prueba')).toBeFalsy;
  });
});

describe('routeExtension', () => {
  it('should return an extension , example .txt , .md', () => {
    expect(routeExtension('D:\\Laboratoria\\LIM015-md-links\\README.md')).toBe('.md');
  })
})

describe('readDir', () => {
  it('should return an array of routes who are inside of the directory', () => {
    expect(readDir('D:\\Laboratoria\\LIM015-md-links\\prueba')).toEqual(['carpeta1', 'carpeta2', 'links.txt', 'text.md']);
  });
});

describe('joinPaths', () => {
  it('should return an array with absolute routes of their files', () => {
    expect(joinPaths('D:\\Laboratoria\\LIM015-md-links\\prueba')).toEqual([
      'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1',
      'D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta2',
      'D:\\Laboratoria\\LIM015-md-links\\prueba\\links.txt',
      'D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md'
    ]);
  });
});

describe('mdContent', () => {
  it('is a function', () => {
    expect(typeof mdContent).toBe('function')
  });
  
  it('should return a string with all the content of the file', () => {
    expect(mdContent('D:\\Laboratoria\\LIM015-md-links\\prueba\\carpeta1\\condicionales.md')).toEqual(`LINKS DE PRUEBA
    - [linknmero1](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
    - [linknumero2](https://www.it-swarm-es.com/es/node.js/tiene-problemas-para-entender-como-funciona-fs.stat/941185365/)`
    );
  });
});

describe('mdFilesPath', () => {
  it('', ()=> {
    expect(mdFilesPath).toBe()
  });
});

describe('mdLinksProp', () => {
  it('', ()=> {
    expect(mdLinksProp).toBe()
  });
});