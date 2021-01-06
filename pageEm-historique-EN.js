var demandes = JSON.parse(localStorage.getItem("demandes")) || [];
var user = JSON.parse(localStorage.getItem("user"));
console.log(demandes);
var index;
console.log(user);
var app = new (function () {
  tbody = document.getElementById("tbody");
var demandesFiltrer=[]
  this.fetchall = () => {
    var data = "";
     demandesFiltrer = demandes.filter(
      (demande) => demande.id == user.id && demande.statutDemande == "en cours"
    );

    demandesFiltrer.forEach((demande,i) => {
      data += "<tr>";
      data += "<td>" + demande.nom + "</td>";
      data += "<td>" + demande.prenom + "</td>";
      data += "<td>" + demande.dateDebut + "</td>";
      data += "<td>" + demande.dateFin + "</td>";
      data += "<td>" + demande.cause + "</td>";
      data += "<td>" + demande.statutDemande + "</td>";

      data +=
        `<td><button data-toggle="modal" class="btn btn-danger"  data-target="#exampleModal" onclick="app.in(${i})">Delete</button></td>`;
      data += "</tr>";
    });
    localStorage.setItem("demandes", JSON.stringify(demandes));
    document.getElementById("tbody").innerHTML = data;
  };
  this.in = (i) => {
    index = i;
    console.log(index);
  };


  this.delete = () => {
var found=demandes.findIndex(element=>element.id==demandesFiltrer[index].id&& element.dateDebut==demandesFiltrer[index].dateDebut&& element.dateFin==demandesFiltrer[index].dateFin)

    demandes.splice(found, 1);
    this.fetchall();
  };
})();

app.fetchall();

function LOGOUT(){
  localStorage.removeItem("user");
  window.location.replace("login.html")
}  