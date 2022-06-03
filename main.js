function fullNameInput() {
  var fullNameInputData = document.getElementById("one");
  fullNameInputData.addEventListener("change", fullNameInput);
  fullNameInputData.innerText = "";
  fullNameInputData.style = "color:blue;";
  var result = fullNameInputData.value;

  return result;
}

function yearInput() {
  var yearInputData = document.getElementById("two");
  yearInputData.style = "color:blue;";
  var result = yearInputData.value;
  return result;
}

function firstButtonData() {
  var firstButton = document.getElementById("firstButton");
  firstButton.onclick = () => {
    if (yearInput() < 2004) {
      var messageAlert = document.getElementById("alert_message");
      messageAlert.innerHTML = "<h1>WELCOME!</h1>";
      messageAlert.style = "color:blue;text-align: center;";
    } else {
      var messageAlert = document.getElementById("alert_message");
      messageAlert.innerHTML =
        "<h1>NO ENTRY!</h1>" + "<img src=" + "PIC.png" + " >";
      messageAlert.style = "color:red;text-align: center;";
    }
    return messageAlert;
  };
}
firstButtonData();
