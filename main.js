function fullNameInput() {
  var x = document.getElementById("first_input");
  return x.value;
}

function birthDateInput() {
  var birthDateInputData = document.getElementById("second_input");
  var userBirthDate = "";
  userBirthDate += birthDateInputData.value;
  return userBirthDate;
}

function clearTextOne() {
  document.getElementById("first_input").value = "";
  document.getElementById("second_input").value = "";
}

document
  .getElementById("firstButton")
  .addEventListener("click", firstButtonData);

function firstButtonData() {
  var messageAlert = document.getElementById("alert_message");
  if (fullNameInput() && birthDateInput() != "") {
    if (birthDateInput() <= "2004-01-01") {
      clearTextOne();
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
      location.reload();
    }
  }
}

function firstNameInput() {
  var fName = document.getElementById("first_names");
  return fName.value;
}

function lastNameInput() {
  var lName = document.getElementById("last_name");
  return lName.value;
}

function clearTextTwo() {
  document.getElementById("first_names").value = "";
  document.getElementById("last_name").value = "";
}

document
  .getElementById("famliy_button")
  .addEventListener("click", famliyButtonInput);

function famliyButtonInput() {
  var firstNames = firstNameInput();
  var lastName = lastNameInput();
  var list = document.getElementById("famliy_list");
  var myArray = [];

  for (var i = 0; i < 1; i++) {
    clearTextTwo();
    myArray.push(firstNames);
  }
  if (true) {
    list.innerHTML += "<li>" + myArray + "</li>";
  }

  console.log(myArray);
}
// famliyButtonInput();
