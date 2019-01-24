var http = require ('http');

http.createServer(function (req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hola mundo desde Heroku');
        res.end()
}).listen(process.env.PORT || 5000);

