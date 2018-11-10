let ws = new WebSocket("ws://wsei.edu.pl:8010");





ws.onopen = function() {
    //ws.send("Message to send");
    console.log("ws open")
    wsSend
}

document.querySelector("#wsSend").addEventListener(
    'click', 
    function(){
        let sendMsg = {
            title: document.querySelector('#name').value,
            body: document.querySelector('#wsMsg').value
        }
    JSON.stringify(sendMsg)
})


ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    console.log("Message is received...")
}
  
ws.onclose = function() { 
    console.log("Connection is closed...")
}