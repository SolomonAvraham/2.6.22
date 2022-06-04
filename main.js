function fullNameInput() {
  var x = document.getElementById("first_input");
  x.style = "color:blue;";
  return x.value;
}

function yearInput() {
  var yearInputData = document.getElementById("second_input");
  yearInputData.style = "color:blue;";
  return yearInputData.value;
}

function cleartext() {
  document.getElementById("first_input").value = "";
  document.getElementById("second_input").value = "";
}

document
  .getElementById("firstButton")
  .addEventListener("click", firstButtonData);

function firstButtonData() {
  var messageAlert = document.getElementById("alert_message");

  if (yearInput() < 2004) {
    messageAlert.innerHTML = "<br>" + "<h1>WELCOME!</h1>";
    messageAlert.style = "color:blue;text-align: center;";
    messageAlert.onmouseover = () => {
      messageAlert.style = "color:green;text-align: center;";
    };
  } else {
    messageAlert.onmouseover = () => {};
    messageAlert.innerHTML =
      "<br>" + "<h1>NO ENTRY!</h1>" + "<img src=" + "PIC.png" + " >";
    messageAlert.style = "color:red;text-align: center;";
  }

  cleartext();
}
