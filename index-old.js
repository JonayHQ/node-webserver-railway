import http from 'node:http';

http.createServer((req, res) => {


res.write("Hola Mundo")

res.end()

})
.listen(8080)

console.log("escuchando", 8080)