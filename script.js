let ws = new WebSocket("ws://wsei.edu.pl:8010");

ws.onopen = function() {
    ws.send("Message to send");
    console.log("Jak to odpalic... ?")
}
  
ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    console.log("Message is received...")
}
  
ws.onclose = function() { 
    console.log("Connection is closed...")
};