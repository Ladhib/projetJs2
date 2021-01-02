var demandes = JSON.parse(localStorage.getItem("demandes"));


var demandesFilter = [];
var app = new (function () {
  tbody = document.getElementById("tbody");
  demandesFilter = demandes.filter((demande) => demande.statutDemande == "en cours");
  console.log(demandesFilter);
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
    found.statutDemande = "Acceptée par sup"
    demandesFilter.splice(index, 1, found);
    localStorage.setItem("demandes", JSON.stringify(demandes));

  }

  this.refuser = (index) => {
    const found = demandesFilter.find((demande) => demandesFilter.indexOf(demande) == index)
    found.statutDemande = "Refusée";
    demandesFilter.splice(index, 1, found);
    localStorage.setItem("demandes", JSON.stringify(demandes));
  }
})
app.fetchall();

        

// var numberOfItems = 4;
// let first = 0;
// let actualPage = 1;
// let maxPages = Math.ceil(demandesFilter.length / numberOfItems );
// showList()


// function nextPage() {
//   if (first + numberOfItems <= demandesFilter.length) {
//     first += numberOfItems;
//     actualPage++;
//     showList();
//   }
// }

// function previous() {
//   if (first - numberOfItems >= 0) {
//     first -= numberOfItems
//     actualPage--;
//     showList();
//   }
// }
// function firstPage(){
//   first = 0
//   actualPage = 1;
//   showList();
// }


 
// function lastPage(){
//   first = (maxPages * numberOfItems)-numberOfItems;
//   actualPage = maxPages;
//   showList(); 
// }

//   function showList() {

//     let tableList = "";
//     for (let i = first; i < first+numberOfItems; i++) {
//       if (i < demandesFilter.length) {
        
//         tableList += `
//       <tr>
//         <td>${demandesFilter[i].id}</td>
//         <td>${demandesFilter[i].nom}</td>
//         <td>${demandesFilter[i].prenom}</td>
//         <td>${demandesFilter[i].dateDebut}</td>
//         <td>${demandesFilter[i].dateFin}</td>
//         <td>${demandesFilter[i].durée}</td>
//         <td>${demandesFilter[i].cause}</td>
//         <td><span class="badge bg-warning text-dark">${demandesFilter[i].statutDemande}</span></td>
//         <td><button type="button" class="btn btn-primary" onclick="app.accepter(' +
//         demandesFilter.indexOf(demande) +
//         ')">Accepter</button></td>';
      
//         '<td><button class="btn btn-danger" onclick="app.refuser(' +
//         demandesFilter.indexOf(demande) +
//         ')">Refuser</button></td>
//       </tr>
//     `
//       }
//     }
//     document.getElementById('tbody').innerHTML = tableList;
    
//   }


  // function showPageInfo(){
  //   document.getElementById('pageInfo').innerHTML = `
  //     Page ${actualPage} / ${maxPages}
  //   `
  // }

