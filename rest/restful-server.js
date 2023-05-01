const server = require('fastify')();

let john = {
    name: "john",
    age: 18,
    attack: 100,
    defense: 100
};

let tom = {
    name: "tom",
    age: 19,
    attack: 105,
    defense: 90
};

let hogRiders = [john, tom];

server.get('/hogRider', function (req, res) {
    return hogRiders;
});

server.get('/hogRider/:name', function (req, res) {
    // 請依Lab說明寫作
    let result = hogRiders.find(element => element.name === req.params.name);
    if(result){
        return result;
    }
    return {'error':'not found'};
});

server.post('/hogRider', function (req, res) {
    // 請依Lab說明寫作
    hogRiders.push(req.body);
    return {count: hogRiders.length};
});

server.put('/hogRider/:name', function (req, res) {
    // 請依Lab說明寫作
    let index = hogRiders.findIndex(element => element.name === req.params.name);
    hogRiders[index]=req.body;
    return hogRiders[index];
});


server.listen(3000, "localhost");
