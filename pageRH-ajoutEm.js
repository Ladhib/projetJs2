var users = JSON.parse(localStorage.getItem("users")) || [];

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

  var obj = {
    id: users.length + 10000,
    nom: nom,
    prenom: prenom,
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

function LOGOUT(){
  localStorage.removeItem("user");
  window.location.replace("login.html")
}  