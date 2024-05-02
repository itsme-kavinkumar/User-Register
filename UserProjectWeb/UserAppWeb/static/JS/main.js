function PasswordIcon(icon) {
  var passwordId = icon.firstElementChild;

  if (passwordId.classList.contains("fa-eye-slash")) {
    passwordId.classList.remove("fa-eye-slash");
    passwordId.classList.add("fa-eye");
    icon.nextElementSibling.type = "text";
  } else {
    passwordId.classList.remove("fa-eye");
    passwordId.classList.add("fa-eye-slash");
    icon.nextElementSibling.type = "password";
  }
}

function validate(divId) {
  var IsValid = true;
  var form = document.getElementById(divId);
  var inputs = form.querySelectorAll("input");
  var email = document.getElementById("txtEmail");
  var password = document.getElementById("txtPassword");
  var confirm_password = document.getElementById("txtConfPassword");

  var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  inputs.forEach(function (input) {
    var value = input.value.trim();
    var errorMessage = input.nextElementSibling;
    if (value === "") {
      errorMessage.textContent = "This field should not be empty";
      IsValid = false;
    } else if (!emailFormat.test(email.value.trim()) && value !== "") {
      email.nextElementSibling.textContent = "Enter the correct email format";
      IsValid = false;
    } else if (password.value.trim() !== confirm_password.value.trim()) {
      confirm_password.nextElementSibling.textContent =
        "Enter the correct confirm password";
      IsValid = false;
    } else {
      errorMessage.textContent = "";
    }
    input.addEventListener("keyup", function () {
      if (input.value.trim() === "") {
        errorMessage.textContent = "This field should not be empty";
      } else {
        errorMessage.textContent = "";
      }
    });
  });
  return IsValid
}

function CreateUser(divId) {
  debugger;
  var is_valid = validate(divId);

  var name= document.getElementById("txtName").value
  var email=document.getElementById("txtEmail").value
  var password=document.getElementById("txtPassword").value
  var confpassword=document.getElementById("txtConfPassword").value
  if (is_valid == true) {
    var data = {
      txtName:name,
      txtEmail: email,
      txtPassword: password,
      txtConfPassword: confpassword
    };

    var response = new XMLHttpRequest();
    response.open("POST", "/create-user/");
    response.setRequestHeader("Content-Type", "application/json");

    var csrfToken = document.querySelector(
      "input[name=csrfmiddlewaretoken]"
    ).value;
    response.setRequestHeader("X-CSRFToken", csrfToken);

    response.send(JSON.stringify(data));
    response.onload = function () {
      res = JSON.parse(response.responseText);

      if (res.status == 201) {

        document.getElementById("txtName").value=''
        document.getElementById("txtEmail").value=''
        document.getElementById("txtPassword").value=''
        document.getElementById("txtConfPassword").value=''
        var success_msg = document.getElementById("show-message");
        success_msg.style.display = "block";
        success_msg.innerHTML = res.message;
        setTimeout(() => {
          success_msg.style.display = "none";
        }, 3000);
      } else if (res.status == 400) {
        var success_msg = document.getElementById("show-message");
        success_msg.style.backgroundColor = "#fff3cd";
        success_msg.style.color = "#856404";
        success_msg.style.display = "block";
        success_msg.innerHTML = res.message;
        setTimeout(() => {
          success_msg.style.display = "none";
        }, 3000);
      } else {
        var success_msg = document.getElementById("show-message");
        success_msg.style.backgroundColor = "#f8d7da";
        success_msg.style.color = "#721c24";
        success_msg.style.display = "block";
        success_msg.innerHTML = res.message;
        setTimeout(() => {
          success_msg.style.display = "none";
        }, 3000);
      }
    };
  }
}
