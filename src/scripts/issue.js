function sendFeedback() {
    var feedback = {
      title: document.getElementById('text-input').value,
      body: document.getElementById('text-area').value,
      assignee: "natwolf123"
    };
    var jsonFeedback = JSON.stringify(feedback);
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      console.log(this.responseText);
    };
    xhttp.open("POST", "https://api.github.com/repos/natwolf123/sandbox/issues");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization", "token f81719eb21ac4bb4794a1a995c16bd8fbb788fde ");
    //xhttp.send();
     xhttp.send(jsonFeedback);
};
