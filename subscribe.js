var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1');
 
// subscribe all topics on connection
client.on('connect', function () {
  client.subscribe('#');
});
 
// print out received message
client.on('message', function (topic, message) {
  console.log(message.toString());
});
