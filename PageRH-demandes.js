var demandes = JSON.parse(localStorage.getItem("demandes"));
var users = JSON.parse(localStorage.getItem("users"));
var index;
var app = new (function () {
  tbody = document.getElementById("tbody");
  demandesFilter = demandes.filter((demande) => demande.statutDemande == "Acceptée par sup");

  this.fetchall = () => {
    var data = "";
    var idDemande;
    var duréeDemande;

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
        '<td><span class="badge bg-info text-dark" style="height:1.5rem">' +
        demande.statutDemande +
        "</span></td>";
      data += `<td><button type="button" class="btn btn-primary" onclick="app.in(${i})" data-toggle="modal" data-target="#AccModal" >Accepter</button></td>`;
      data += `<td><button type="button" class="btn btn-danger"  onclick="app.in(${i})" data-toggle="modal" data-target="#deleteModal">Refuser</button></td>`;
      data += "</tr>";
      idDemande = demande.id;
      duréeDemande = demande.durée;
      i++;
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
    demandes[ind].statutDemande = "Acceptée par RH";
    // console.log(demandes[index].statutDemande);
    duréeDemande = demandesFilter[index].durée;
    localStorage.setItem("demandes", JSON.stringify(demandes));
    // console.log(duréeDemande);
    const found = users.find((obj) => (idDemande = obj.id));
    found.soldeCongé = found.soldeCongé - duréeDemande;
    console.log(found.soldeCongé);
    localStorage.setItem("users", JSON.stringify(users));
  };

  this.refuser = () => {
    demandes[index].statutDemande = "Refusée";
    localStorage.setItem("demandes", JSON.stringify(demandes));
  };
})();
app.fetchall();
