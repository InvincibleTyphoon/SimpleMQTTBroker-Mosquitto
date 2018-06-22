'use strict';
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1');

var readline = require('readline')

//used for standart input
var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    terminal : false
});

// topic for messages that came from stdin of publisher
var stdinMessage = "stdMessage"

// if stdin input comes, print it to stdout and publish the message
rl.on('line', function(line){
    console.log(line);
    client.publish(stdinMessage,line);
})

client.on('connect', function () {
    client.subscribe(stdinMessage);
    client.publish("Connected!");
});

// print log when message event occur
client.on('message', function (topic, message) {
    console.log("Published: " + topic.toString() + ' :: ' + message.toString());
});