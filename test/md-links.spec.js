const  { routeExistence } = require('../src/api.js');
console.log(routeExistence);

describe('routeExistence', () => {
  it('is a function', () => {
    expect(typeof routeExistence).toBe('function');
  });
  it('should return true if route exists', () => {
    expect(routeExistence('D:\\Laboratoria\\LIM015-md-links\\README.md')).toBe(true);
  });
  it('should return false if route does not exist', ()=>{
    expect(routeExistence('D:\\Laboratoria\\LIM015-md-links\\READMEEE.md')).toBe(false);
  })

});
