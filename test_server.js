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

dispatcher.onPost("/lock", function(req, res) {
    request({
    	url: 'https://api.onion.io/v1/devices/*/onion-lock/lock', /* the device server
        remember to replace * with your device id*/
    	method: 'POST', //Specify the method

   		headers: {
    		'Host': 'api.onion.io',
			'x-api-key': '*', // replace * with api key
  	  	}
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

dispatcher.onPost("/unlock", function(req, res) {
    request({
        url: 'https://api.onion.io/v1/devices/*/onion-lock/unlock', /* the device server
        remember to replace * with your device id*/ 
        method: 'POST', //Specify the method

        headers: {
            'Host': 'api.onion.io',
            'x-api-key': '*',// replace * with api key
        }
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

dispatcher.onPost("/forcelock", function(req, res) {
    request({
        url: 'https://api.onion.io/v1/devices/*/onion-lock/forcelock', /* the device server
        remember to replace * with your device id*/
        method: 'POST', //Specify the method
        headers: {
            'Host': 'api.onion.io',
            'x-api-key': '*',// replace * with api key
        }
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

dispatcher.onPost("/forceunlock", function(req, res) {
    request({
        url: 'https://api.onion.io/v1/devices/*/onion-lock/forceunlock', /* the device server
        remember to replace * with your device id*/
        method: 'POST', //Specify the method

        headers: {
            'Host': 'api.onion.io',
            'x-api-key': '*',// replace * with api key
        }
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

dispatcher.onPost("/status", function(req, res) {
    request({
        url: 'https://api.onion.io/v1/devices/*/onion-lock/status', /* the device server
        remember to replace * with your device id*/
        method: 'POST', //Specify the method
        headers: {
            'Host': 'api.onion.io',
            'x-api-key': '*',// replace * with api key
        }
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
