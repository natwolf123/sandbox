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
    xhttp.setRequestHeader("Authorization", "token c8db235df627a130e63f34ac63eb45130cd698ca");
    //xhttp.send();
     xhttp.send(jsonFeedback);
};
