const { 
totalLinks,
uniqueLinks,
brokenLinks,
 } = require('../src/options.js');

const input = [
    {
      href: 'https://www.youtube.com/watch?v=grOjfJpqwyw&list=PLUER6d6Xavb5yLHty9xatiOsHGbqLcRis&index=1',
      text: 'Hola',
      file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://www.youtube.com/watch?v=grOjfJpqwyw&list=PLUER6d6Xavb5yLHty9xatiOsHGbqLcRis&index=1',
      text: 'chao',
      file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://google.',
      text: 'Google',
      file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md',
      status: 'Error FetchError: request to https://google./ failed, reason: getaddrinfo ENOTFOUND google.',
      message: 'fail'
    },
    {
      href: 'https://facebook.',
      text: 'Facebook',
      file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md',
      status: 'Error FetchError: request to https://facebook./ failed, reason: getaddrinfo ENOTFOUND facebook.',
      message: 'fail'
    },
    {
      href: 'https://www.20thcenturystudios.com/404',
      text: 'Laptop',
      file: 'D:\\Laboratoria\\LIM015-md-links\\prueba\\text.md',
      status: 404,
      message: 'fail'
    }
  ]

describe('totalLinks', ()=>{
    it('should return the total links', () => {
        expect(totalLinks(input)).toBe(5);
    });
});

describe('uniqueLinks', ()=>{
    it('shoul return the total of unique links', ()=>{
        expect(uniqueLinks(input)).toBe(4);
    })
});

describe('brokenLinks', ()=>{
    it('should return the total broken links', ()=>{
        expect(brokenLinks(input)).toBe(3);
    });
});
