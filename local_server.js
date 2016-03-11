var http = require('http');
dispatcher = require('httpdispatcher');
request = require('request');

const PORT = 8080;

//function handleRequest1 (request, response){
//	response.end ("server running\n");
//}

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
/*
function loadDoc() {
    var xhttp = new XMLHttpRequest;
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo").innerHTML = xhttp.responseText;
        } 
      };
    xhttp.open("POST", "http://api.onion.io/v1/devices/0ef58bc8-e5e1-48c2-90f9-3bb3c633f27e/foo/", true);
    xhttp.setRequestHeader("Host","api.onion.io");
    xhttp.setRequestHeader("Accept-Encoding","gzip,deflate,sdch");
    xhttp.setRequestHeader("Accept-Language","en-US,en;q=0.8,fa;q=0.6,sv;q=0.4");
    xhttp.setRequestHeader("Cache-Control","no-cache");
    xhttp.setRequestHeader("Connection","keep-alive");
    xhttp.setRequestHeader("Origin","http://swagger-editor.s3-website-us-west-2.amazonaws.com");
    xhttp.setRequestHeader("Referer","http://swagger-editor.s3-website-us-west-2.amazonaws.com/");
    xhttp.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:45.0) Gecko/20100101 Firefox/45.0");
    xhttp.setRequestHeader("Content-Length","2");
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.setRequestHeader("x-api-key", "5I5Pwj0demSsur0HB2hi7JzlT2gE8213xn8DNgWubm5HF3iKac4n0ACKRBcc85p2");
    xhttp.send();
    console.log("response"+xhttp.responseText);
  }*/

dispatcher.onPost("/test", function(req, res) {
    request({
    	url: 'https://api.onion.io/v1/devices/0ef58bc8-e5e1-48c2-90f9-3bb3c633f27e/utils/test',
    	//qs: {from: 'blog example', time: +new Date()}, //Query string data
    	method: 'POST', //Specify the method
   		//headers: 'HTTP/1.1',
   		headers: {
    		'Host': 'api.onion.io',
			'Accept': 'application/json',
			'Accept-Encoding': 'gzip,deflate,sdch',
            'Accept-Language': 'en-US,en;q=0.8,fa;q=0.6,sv;q=0.4',
			'Cache-Control': 'no-cache',
			'Connection': 'keep-alive',
			'Origin': 'http://swagger-editor.s3-website-us-west-2.amazonaws.com',
			'Referer': 'http://swagger-editor.s3-website-us-west-2.amazonaws.com/',
			'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:45.0) Gecko/20100101 Firefox/45.0',
			'x-api-key': '5I5Pwj0demSsur0HB2hi7JzlT2gE8213xn8DNgWubm5HF3iKac4n0ACKRBcc85p2',
			'Content-Length': '2',
			'Content-Type': 'application/json'
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


