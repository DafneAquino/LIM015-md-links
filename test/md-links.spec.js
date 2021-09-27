const { routeExistence,
  pathValidate,
  routeState,
  routeIsDir,
  routeIsFile,
  routeExtension,
  readDir,
  joinPaths
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
    expect(routeIsFile('D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md')).toBe(true);
  });
  it('should return false if the route is not a file', () => {
    expect(routeIsFile('D:\\Laboratoria\\LIM015-md-links\\prueba')).toBe(false);
  });
});

describe('routeExtension', () => {
  it('should return an extension , example .txt , .md', () => {
    expect(routeExtension('D:\\Laboratoria\\LIM015-md-links\\README.md')).toBe('.md');
  })
})

describe('readDir', () => {
  it('should return an array of routes who are inside of the directory', () => {
    expect(readDir('D:\\Laboratoria\\LIM015-md-links\\prueba')).toEqual(['links.txt', 'text.md']);
  });
});

describe('joinPaths', () => {
  it('should return an array with absolute routes of their files', () => {
    expect(joinPaths('D:\\Laboratoria\\LIM015-md-links\\prueba')).toEqual([
      'D:\\Laboratoria\\LIM015-md-links\\prueba\\links.txt',
      'D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md'
    ])
  });
});
