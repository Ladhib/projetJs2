var demandes = JSON.parse(localStorage.getItem("demandes"));
var demandesFilter = [];
var index;
var app = new (function () {
  console.log(demandesFilter);

  this.fetchall = () => {
    var data = "";
    demandesFilter = demandes.filter((demande) => demande.statutDemande == "en cours");

    demandesFilter.forEach((demande, i) => {
      data += "<tr>";
      data += "<td>" + demande.id + "</td>";
      data += "<td>" + demande.nom + "</td>";
      data += "<td>" + demande.prenom + "</td>";
      data += "<td>" + demande.dateDebut + "</td>";
      data += "<td>" + demande.dateFin + "</td>";
      data += "<td>" + demande.durée + "</td>";
      data += "<td>" + demande.cause + "</td>";
      data +=
        '<td><span class="badge bg-warning text-dark" style="height:1.5rem">' +
        demande.statutDemande +
        "</span></td>";
        data += `<td><button type="button" class="btn btn-primary" onclick="app.in(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal1" >Accepter</button></td>`;

        data += `<td><button type="button" class="btn btn-danger"  onclick="app.in(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal2">Refuser</button></td>`;
        data += "</tr >";
    });

    document.getElementById("tbody").innerHTML = data;
  };
  this.in = (i) => {
    console.log(i);
    index = i;
  };
  this.accepter = () => {
    ind = demandes.findIndex(
      (x) =>
        x.id == demandesFilter[index].id &&
        x.dateDebut == demandesFilter[index].dateDebut &&
        x.dateFin == demandesFilter[index].dateFin &&
        x.statutDemande == demandesFilter[index].statutDemande
    );
    demandes[ind].statutDemande = "Acceptée par SUP";
    localStorage.setItem("demandes", JSON.stringify(demandes));
  };

  this.refuser = () => {
    ind = demandes.findIndex(
      (x) =>
        x.id == demandesFilter[index].id &&
        x.dateDebut == demandesFilter[index].dateDebut &&
        x.dateFin == demandesFilter[index].dateFin &&
        x.statutDemande == demandesFilter[index].statutDemande
    );
    demandes[ind].statutDemande = "Refusée";
    localStorage.setItem("demandes", JSON.stringify(demandes));
  };
  
})();
app.fetchall();


//logout:
function LOGOUT() {
  localStorage.removeItem("user");
  window.location.replace("login.html")
}  