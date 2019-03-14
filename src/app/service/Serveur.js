var http = require('http');
var httpServer = http.createServer(function (res, req) {
  console.log('Salut a tous ! ');
});
httpServer.listen(1337);
let io = require('socket.io').listen(httpServer);
