import http from 'http';
const server = http.createServer((request, response) =>{
          response.writeHead(200);
          response.write("Hello!");
          setTimeout(()=>{
            response.end("Good Bye!");
          }, 5000);
});
server.listen(8080);
