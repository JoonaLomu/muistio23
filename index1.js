const http = require('http')

const app = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end ('Terve Petri')
})

const PORT = 3001
app.listen(PORT)
console.log(`Pavlvelin käynnissä postissa ${PORT}`)