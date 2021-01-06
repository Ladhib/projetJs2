var demandes = JSON.parse(localStorage.getItem("demandes"));
var users = JSON.parse(localStorage.getItem("users"));
var index;
var app = new (function () {
  tbody = document.getElementById("tbody");
  demandesFilter = demandes.filter((demande) => demande.statutDemande == "Acceptée par SUP");
  var idDemande;
  var duréeDemande;
  this.fetchall = () => {
    var data = "";
    

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
    duréeDemande= 
    // idDemande=demandesFilter[index].id
    localStorage.setItem("demandes", JSON.stringify(demandes));
    console.log(duréeDemande);
    const found = users.find((obj) => (demandesFilter[index].id == obj.id));
    found.soldeCongé = found.soldeCongé - demandesFilter[index].durée;
    console.log(found.soldeCongé);
    localStorage.setItem("users", JSON.stringify(users));
    
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

function LOGOUT(){
  localStorage.removeItem("user");
  window.location.replace("login.html")
}  