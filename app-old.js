const http = require('http');

http.createServer((request, response) => {
   
/*     const lista = {
        'numero': 1,
        'nombre': 'uno'
}

    response.writeHead(200,  {'Content-Type': 'application/Json'});

    response.write(JSON.stringify(lista)); */
    response.write('Hola Mundo');
    response.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);