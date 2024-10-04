// app.js
function holaMundo() {
    return 'Hola Mundo';
}

// Exportamos la función para usarla en las pruebas unitarias
module.exports = holaMundo;

// Si el archivo se ejecuta directamente desde la línea de comandos, mostramos el mensaje en la consola
if (require.main === module) {
    console.log(holaMundo());
}
