const dgram = require('dgram');

// 定義資料封包
let message = Buffer.from('UDP Client to Server: 哈囉 Server!');

// 建立 UDP 用戶端
console.info('Now create UDP Client...');

// 使用 dgram.createSocket 方法建立一個 UDP 用戶端
let client = dgram.createSocket('udp4');

// 向伺服器發送 UDP 資料封包
client.send(message, 0, message.length, 2390, '192.168.4.187', function (err, bytes) {
    if (err) throw err;
    //console.log('UDP message sent to ' + HOST + ':' + PORT);
    console.info(bytes); // bytes 為用戶端發送到伺服器端資料封包的位元組長度

    // 關閉用戶端
    client.close();
});

// 為 UDP 用戶端新增一個 close 事件函式
client.on('close', function () {
    console.log('client disconnected');
});