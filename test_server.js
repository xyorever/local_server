var http = require('http'); // http module
dispatcher = require('httpdispatcher'); // httpdispatcher module
request = require('request'); // request module

const PORT = 8080; // create a port that can listen on

function handleRequest(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
	console.log ("Server listening on: http://localhost:%s\n", PORT);
})

/* the following code depends on the ubus function you have created*/

dispatcher.onPost("/ledon", function(req, res) {
    request({
        url: 'https://api.onion.io/v1/devices/0ef58bc8-e5e1-48c2-90f9-3bb3c633f27e/expled/set',
        method: 'POST', //Specify the method
        headers: {
            'Host': 'api.onion.io',
            'x-api-key': '5I5Pwj0demSsur0HB2hi7JzlT2gE8213xn8DNgWubm5HF3iKac4n0ACKRBcc85p2',
        },
        body: '{"red":0,"green":1,"blue":1}'
    }, function(error, response, body){
        if(error) {
         console.log("error" + error);
        } else {
            console.log("responding: ");
            console.log(response.statusCode, body);
        }
    });
    res.end('Got Post Data\n');
});
dispatcher.onPost("/ledoff", function(req, res) {
    request({
        url: 'https://api.onion.io/v1/devices/0ef58bc8-e5e1-48c2-90f9-3bb3c633f27e/expled/set',
        method: 'POST', //Specify the method
        headers: {
            'Host': 'api.onion.io',
            'x-api-key': '5I5Pwj0demSsur0HB2hi7JzlT2gE8213xn8DNgWubm5HF3iKac4n0ACKRBcc85p2',
        },
        body: '{"red":0,"green":0,"blue":0}'
    }, function(error, response, body){
        if(error) {
         console.log("error" + error);
        } else {
            console.log("responding: ");
            console.log(response.statusCode, body);
        }
    });
    res.end('Got Post Data\n');
});
