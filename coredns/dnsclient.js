const dns2 = require('dns2');
const { UDPClient } = require('dns2');
const resolve = UDPClient({
    dns: '127.0.0.1', port: 1053, recursive: false
});
(async () => {
    const response = await resolve('nccu.lab', 'TXT');
    console.log(response.answers);
})();
