var demandes = JSON.parse(localStorage.getItem("demandes")) || [];
var user = JSON.parse(localStorage.getItem("user"));

console.log(user);
var app = new (function () {
  tbody = document.getElementById("tbody");

  this.fetchall = () => {
    var data = "";
    const demandesFiltrer = demandes.filter((demande) => demande.id == user.id);

    demandesFiltrer.forEach((demande) => {
      data += "<tr>";
      data += "<td>" + demande.nom + "</td>";
      data += "<td>" + demande.prenom + "</td>";
      data += "<td>" + demande.dateDebut + "</td>";
      data += "<td>" + demande.dateFin + "</td>";
      data += "<td>" + demande.cause + "</td>";
      data += "<td>" + demande.statutDemande + "</td>";

      data +=
        '<td><button class="btn btn-danger" onclick="app.delete(' +
        demandesFiltrer.indexOf(demande) +
        ')">Delete</button></td>';
      data += "</tr>";
    });
    console.log(data);
    localStorage.setItem("demandes", JSON.stringify(demandes));
    document.getElementById("tbody").innerHTML = data;
  };

  this.delete = (demande) => {
    demandes.splice(demande, 1);
    this.fetchall();
  };
})();

app.fetchall();
