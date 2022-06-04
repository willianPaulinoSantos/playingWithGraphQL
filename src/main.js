import { createServer, request } from 'http';

const server = createServer((request, response) => {
    switch(request.url){
        case '/status': {
            response.writeHead(200, {
                'Content-type' : 'application/json',

            });
            response.write(JSON.stringify({
                status: 'Okay'
            }));
            response.end();
            return;
        }
        default: {
            response.writeHead(404, 'Service not found');
            response.end();
        }
    }
});


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
    console.log(`server is listening in http://127.0.0.1:${PORT}`);
});