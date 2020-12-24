var demandes = JSON.parse(localStorage.getItem("demandes")) || [];
user = JSON.parse(localStorage.getItem("user"));
var durée;
function GetDays() {
  var datefin = new Date(document.getElementById("fin").value);
  var datedebut = new Date(document.getElementById("debut").value);
  console.log(datefin);
  return parseInt((datefin - datedebut) / (24 * 3600 * 1000));
}
function cal() {
  if (document.getElementById("fin")) {
    durée = GetDays();
  }
}
console.log(durée);


function envoyerDemande() {
  var form1 = document.getElementById("form1");

  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var dateDebut = document.getElementById("debut").value;
  var dateFin = document.getElementById("fin").value;

  var checkbox;

  maladie = document.getElementById("inlineRadio1");
  maternité = document.getElementById("inlineRadio2");
  autre = document.getElementById("inlineRadio3");
  autrecause = document.getElementById("autreCause");
  if (maladie.checked == true) {
    var checkbox = document.getElementById("inlineRadio1").value;
  } else if (maternité.checked == true) {
    var checkbox = document.getElementById("inlineRadio2").value;
  } else if (autre.checked == true) {
    var checkbox = document.getElementById("autreCause").value;
  }
  var userId = user.id;

  var demande = {
    id: userId,
    nom: nom,
    prenom: prenom,
    dateDebut: dateDebut,
    dateFin: dateFin,
    durée: durée,
    cause: checkbox,
    statutDemande: "en cours",
  };

  demandes.push(demande);
  localStorage.setItem("demandes", JSON.stringify(demandes));
  form1.reset();
  console.log(userId);
}
