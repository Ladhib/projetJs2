var user = JSON.parse(localStorage.getItem("user"));
var users = JSON.parse(localStorage.getItem("users"));
function profile() {
  nom = document.getElementById("userName").innerHTML = user.nom + " " + user.prenom;

  nom = document.getElementById("first_name").value = user.nom;
  prenom = document.getElementById("last_name").value = user.prenom;
  Email = document.getElementById("email").value = user.email;
  password = document.getElementById("password").value = user.password;
  solde = document.getElementById("solde").innerHTML = "Solde de Congé : " + user.soldeCongé;
  console.log(user);
}

function editProfile() {
  nom = document.getElementById("first_name").value;
  prenom = document.getElementById("last_name").value;
  solde = document.getElementById("solde").value;
  Email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  var found = users.find((element) => element.id == user.id);

  found.nom = nom;
  found.prenom = prenom;
  found.soldeCongé = solde;
  found.email = Email;
  found.password = password;
  localStorage.setItem("users", JSON.stringify(users));
  user.nom = nom;
  user.prenom = prenom;
  user.email = Email;
  user.password;

  localStorage.setItem("user", JSON.stringify(user));
}
function retour() {
  window.location.replace("PageEm.html");
}
