// tests/app.test.js
const holaMundo = require('../app');

test('Debería retornar "Hola Mundo"', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});
