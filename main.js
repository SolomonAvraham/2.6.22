function fullNameInput() {
  var x = document.getElementById("first_input");
  return x.value;
}

function birthDateInput() {
  var birthDateInputData = document.getElementById("second_input");
  return birthDateInputData.value;
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

// PART 2 //

function firstNameInput() {
  var firstNameDate = document.querySelectorAll(".first_names_class");
  var result = "";
  for (var i = 0; i < firstNameDate.length; i++) {
    result += firstNameDate[i].value + " " + lastNameInput() + "<br>";
  }
  var finalResult = (document.getElementById("famliy_list").innerHTML +=
    "<li>" + result + "</li>");

  return finalResult;
}

function lastNameInput() {
  var lName = document.getElementById("last_name");
  return lName.value;
}

function clearTextTwo() {
  var a = "";
  document.querySelectorAll(".first_names_class").value(a);
  document.getElementById("last_name").value = "";
}

document
  .getElementById("famliy_button")
  .addEventListener("click", famliyButtonInput);

function famliyButtonInput() {
  firstNameInput();
  clearTextTwo();


  if (true) {
  }


}
