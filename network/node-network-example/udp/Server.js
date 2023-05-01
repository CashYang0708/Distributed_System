const dgram = require('dgram');
const server = dgram.createSocket('udp4');
//
// server.on('error', (err) => {
//     console.log(`server error:\n${err.stack}`);
//     server.close();
// });

server.on('message', (msg, rinfo) => {
    server.send(msg, port=rinfo.port, address=rinfo.address, ()=>{
        console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
        console.log(rinfo.size);
        server.close();
    })
});
//
// server.on('listening', () => {
//     const address = server.address();
//     console.log(`server listening ${address.address}:${address.port}`);
// });

server.bind(20213);