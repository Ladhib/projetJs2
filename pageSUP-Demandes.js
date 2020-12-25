var demandes = JSON.parse(localStorage.getItem("demandes"));
var app = new (function () {
  tbody = document.getElementById("tbody");
    demandesFilter= demandes.filter((demande)=>demande.statutDemande=="en cours")

  
  this.fetchall = () => {
    var data = "";

    demandesFilter.forEach((demande) => {

      data += "<tr>";
      data += "<td>" + demande.id + "</td>";
      data += "<td>" + demande.nom + "</td>";
      data += "<td>" + demande.prenom + "</td>";
      data += "<td>" + demande.dateDebut + "</td>";
      data += "<td>" + demande.dateFin + "</td>";

      data += "<td>" + demande.durée + "</td>";
      data += "<td>" + demande.cause + "</td>";
      data +=
        '<td><button type="button" class="btn btn-primary" onclick="app.accepter(' +
        demandesFilter.indexOf(demande) +
        ')">Accepter</button></td>';
      data +=
        '<td><button class="btn btn-danger" onclick="app.refuser(' +
        demandesFilter.indexOf(demande) +
        ')">Refuser</button></td>';
      data += "</tr >";
    });

    document.getElementById("tbody").innerHTML = data;
  } ;

  this.accepter = (index) => {
    const demandeFound = demandesFilter.find((demande) => demandesFilter.indexOf(demande) == index);
    demandeFound.statutDemande = "Acceptée par sup";
    demandes.splice(index, 1, demandeFound);
    localStorage.setItem("demandes", JSON.stringify(demandes));
  };

  this.refuser = (index) => {
    const demandeFound = demandesFilter.find((demande) => demandesFilter.indexOf(demande) == index);
    demandeFound.statutDemande = "Refusée";
    demandes.splice(index, 1, demandeFound);
    localStorage.setItem("demandes", JSON.stringify(demandes));
  };
})();
app.fetchall();
