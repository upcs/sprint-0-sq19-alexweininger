/*
 * Alex Weininger
*/

/*
 * external citation:
 * accessed 1/20/2019
 * I needed to know how to set up a simple node js server to serve a webpage.
 * I used the resource linked in the assignment guide for sprint 0.
 * https://www.tutorialspoint.com/nodejs/nodejs_web_module.htm
 *
 * I learned to basic aspects and functions needed to set up a server to handle requests and make responses.
 *
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var functions = require('./functions'); // imprt my own functions file which contains the sum function

// this method creates a server
http.createServer( function (request, response) {
   // read the request
   var path = url.parse(request.url).pathname;
   console.log('Received a request for ' + path);

   // get file from file system
   fs.readFile(path.substr(1), function (error, data) {
      if (error) {
         console.log(error);
         // if error show a 404
         response.writeHead(404, {'Content-Type': 'text/html'});
      } else {
         response.writeHead(200, {'Content-Type': 'text/html'});
         // Write the content of the file to response body
         response.write(data.toString());
      }
      response.end();
   });
}).listen(8081);
