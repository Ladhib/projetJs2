var users = JSON.parse(localStorage.getItem("users")) || [];

function ValidateEmail(email) {
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(mailformat)) {
    // alert("Valid email address!");
    document.getElementById("email").focus();
    return true;
  } else {
    document.form.Email.focus();
    return false;
  }
}
function Validatepassword(password) {
  const passwordFormat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;

  if (password.match(passwordFormat)) {
    // alert("Valid password !");
    // document.getElementById("password").focus();
    return true;
  } else {
    // console.log("ok");
    // const errorPassword = document.getElementById("passwordError");
    // errorPassword.innerHTML =
    alert(
      "password must contain at least: 8 characters,1 number,1 lowercase character,1 uppercase character"
    );
    // errorPassword.style.color = "red";
    // document.getElementById("password").focus();
    return false;
  }
}

function add() {
  var form = document.getElementById("form");

  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var age = document.getElementById("age").value;
  var soldeCongé = document.getElementById("Scongé").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var checkbox;

  EM = document.getElementById("inlineRadio1");
  SUP = document.getElementById("inlineRadio2");
  RH = document.getElementById("inlineRadio3");

  if (EM.checked == true) {
    var checkbox = document.getElementById("inlineRadio1").value;
  } else if (SUP.checked == true) {
    var checkbox = document.getElementById("inlineRadio2").value;
  } else if (RH.checked == true) {
    var checkbox = document.getElementById("inlineRadio3").value;
  }
  if (
    nom != "" &&
    prenom != "" &&
    soldeCongé != "" &&
    age != "" &&
    (EM.checked == true || SUP.checked == true || RH.checked == true) &&
    ValidateEmail(email) &&
    Validatepassword(password)
  ) {
    var obj = {
      id: users.length + 10000,
      nom: nom,
      prenom: prenom,
      age: age,
      soldeCongé: soldeCongé,
      email: email,
      password: password,
      poste: checkbox,
    };
    console.log(checkbox);
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    form.reset();
  }
}

function LOGOUT() {
  localStorage.removeItem("user");
  window.location.replace("login.html");
}
