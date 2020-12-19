var users = JSON.parse(localStorage.getItem("users")) || [];

function add() {
  var form = document.getElementById("form");

  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var age = document.getElementById("age").value;
  var soldeCongé = document.getElementById("Scongé").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // var em = document.getElementById("em").value;
  // var sup = document.getElementById("sup").value;

  var obj = {
    id: users.length + 10000,
    nom: nom,
    prenom: prenom,
    age: age,
    soldeCongé: soldeCongé,
    email: email,
    password: password,
    // poste: em,
  };

  users.push(obj);
  localStorage.setItem("users", JSON.stringify(users));
  form.reset();
}
