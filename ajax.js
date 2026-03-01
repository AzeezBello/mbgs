function sendContactMsg() {
  var form = document.getElementById("contactForm");
  var response = document.getElementById("contact_resp");

  if (!form || !response) {
    return false;
  }

  var name = form.name.value.trim();
  var email = form.email.value.trim();
  var message = form.message.value.trim();

  if (!name) {
    response.textContent = "Your name must be specified.";
    return false;
  }

  if (!email) {
    response.textContent = "Your email must be specified.";
    return false;
  }

  if (!message) {
    response.textContent = "Message must not be blank.";
    return false;
  }

  response.textContent = "Sending your message. Please wait...";

  fetch("assets/dist/scripts/ajax.php?send_msg", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: new URLSearchParams({
      name: name,
      email: email,
      message: message
    }).toString()
  })
    .then(function (httpResponse) {
      if (!httpResponse.ok) {
        throw new Error("Request failed");
      }

      return httpResponse.text();
    })
    .then(function (result) {
      response.innerHTML = result;
      form.reset();
    })
    .catch(function () {
      response.textContent = "Message could not be sent right now. Please call 08188886018 or 08068111447.";
    });

  return false;
}
