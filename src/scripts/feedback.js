function sendIssueFeedback() {
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
    xhttp.setRequestHeader("Authorization", "token " + document.getElementById("text-token").value);
    xhttp.send(jsonFeedback);
};

function sendEmailFeedback(){
  var service_id = "default_service";
  var template_id = "feedback";

  emailjs.sendForm(service_id,template_id,"feedbackForm")
  	.then(function(){
    	alert("Feedback Sent!");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });
};
