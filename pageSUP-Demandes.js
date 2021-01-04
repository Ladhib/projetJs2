var demandes = JSON.parse(localStorage.getItem("demandes"));
var app = new (function () {
  tbody = document.getElementById("tbody");
  demandesFilter = demandes.filter((demande) => demande.statutDemande == "en cours");

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
        '<td><span class="badge bg-warning text-dark" style="height:1.5rem">' +
        demande.statutDemande +
        "</span></td>";
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
  };

  this.accepter = (index) => {
    const found = demandesFilter.find((demande) => demandesFilter.indexOf(demande) == index);
    found.statutDemande = "Acceptée par sup";
    demandesFilter.splice(index, 1, found);
    localStorage.setItem("demandes", JSON.stringify(demandes));
  };

  this.refuser = (index) => {
    const found = demandesFilter.find((demande) => demandesFilter.indexOf(demande) == index);
    found.statutDemande = "Refusée";
    demandesFilter.splice(index, 1, found);

    localStorage.setItem("demandes", JSON.stringify(demandes));
  };
})();
app.fetchall();
