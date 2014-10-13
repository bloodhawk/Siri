var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];
var randomMessage = function(){
	var random = messages[Math.floor(Math.random()*messages.length)];
	return random;
};
var onRequest = function(req, res){
	if(req.method === 'GET'){
		res.writeHead(200, {
		'Connection': 'close', //close the connection after request sent
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});	
	res.end(JSON.stringify({message:randomMessage()}));
	}
	
}
var http = require('http');
var port = 8887;
http.createServer(onRequest).listen(port, function(){
	console.log("Listening on port " + port)
});
