var demandes = JSON.parse(localStorage.getItem("demandes"))
var app = new (function () {
    tbody = document.getElementById("tbody");
    
    this.fetchall = () => {
        var data = "";
        const demandesfilter = demandes.filter(demande => demande.statutDemande=="en cours");
        demandesfilter.forEach((demande) => {
               

                data += "<tr>";
                data += "<td>" + demande.id + "</td>";
                data += "<td>" + demande.nom + "</td>";
                data += "<td>" + demande.prenom + "</td>";
                data += "<td>" + demande.dateDebut + "</td>";
                data += "<td>" + demande.dateFin + "</td>";


                data += "<td>" + demande.durée + "</td>";
                data += "<td>" + demande.cause + "</td>";
                data += "<td>" + demande.statutDemande + "</td>";
                data +=
                    '<td><button type="button" class="btn btn-primary" onclick="app.accepter(' +
                    demandesfilter.indexOf(demande) +
                    ')">Accepter</button></td>';
                data +=
                    '<td><button class="btn btn-danger" onclick="app.refuser(' +
                    demandesfilter.indexOf(demande) +
                    ')">Refuser</button></td>';
                data += "</tr >";
                
            });
        

        document.getElementById("tbody").innerHTML = data;
    };


    this.accepter=(index)=>{
        const found=demandesfilter.find((demande) => demandesfilter.indexOf(demande)==index);
        found.statutDemande="Accepté"
        demandesfilter.splice(index,1,found);
        localStorage.setItem("demandes", JSON.stringify(demandes));
    
    }

    this.refuser=(index)=>{
        const found=demandesfilter.find((demande)=>demandesfilter.indexOf(demande)==index)
        found.statutDemande = "Refusé";
        demandesfilter.splice(index,1,found);
        localStorage.setItem("demandes", JSON.stringify(demandes));
    }
 })
app.fetchall();