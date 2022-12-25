const http = require('http');
const continents = require('./data/continents')

const server = http.createServer((req, res) => {
    if(req.url === '/api/continents' && req.method === "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(continents))
    }else{
         res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: "Page Not Found"}))
    }
    
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// module.exports = server;