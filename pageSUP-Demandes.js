var demandes = JSON.parse(localStorage.getItem("demandes"))
var app = new (function () {
    tbody = document.getElementById("tbody");
    
    this.fetchall = () => {
        var data = "";
            demandes.forEach((demande) => {
               

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
                    demandes.indexOf(demande) +
                    ')">Accepter</button></td>';
                data +=
                    '<td><button class="btn btn-danger" onclick="app.refuser(' +
                    demandes.indexOf(demande) +
                    ')">Refuser</button></td>';
                data += "</tr >";
                
            });
        

        document.getElementById("tbody").innerHTML = data;
    };


    this.accepter=(index)=>{
        const found=demandes.find((demande) => demandes.indexOf(demande)==index);
        found.statutDemande="Accepté"
        demandes.splice(index,1,found);
        localStorage.setItem("demandes", JSON.stringify(demandes));
    
    }

    this.refuser=(index)=>{
        const found=demandes.find((demande)=>demandes.indexOf(demande)==index)
        found.statutDemande = "Refusé";
        demandes.splice(index,1,found);
        localStorage.setItem("demandes", JSON.stringify(demandes));
    }
 })
app.fetchall();