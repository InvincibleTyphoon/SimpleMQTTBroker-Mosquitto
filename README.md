# SimpleMQTTBroker-Mosquitto
Simple Mqtt broker example using Mosquitto broker

# How to use
```
1. Command "npm install". This project may be dependent on  morgan, mqttt, readline packages.
- Read pakage.json for more detail.
   
2. Get into the mosquitto directory and command "mosquitto -v"
- This command will start the mosquitto broker server.
 
3. Command "node publisher"
- This command will start punlisher. 

4. Command "node subscribe"
- This command will start subscriber.

Now you are ready to publish a message. The publisher uses stdin to get message to publish, 
so you may need to type the message on the cmd of publisher.

Check if typed messages are correctly received from subscriber. If not, there's some problem.
 ```
 
 # Working Environment
 ```
 OS : Windows 10
 Language : Node JS
 
 But this Codes may work on Linux environment.
 ```
 
 # About mosquitto
 ```
 It was hard for me to install mosquitto broker in Windows.
 You may try install on this link : https://mosquitto.org/download/
 But if you have problem with the installation, you may just use the one in the mosquitto directory
 of this project
 But remember, I'm not sure where I received this mosquitto.
 I'll remove the files if there is some problem like virus or copyright
 ```
