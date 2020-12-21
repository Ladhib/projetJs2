var demandes = JSON.parse(localStorage.getItem("demandes"))
var app = new (function () {
    this.tbody = document.getElementById("tbody");
    this.fetchall = () => {
        var data = "";
        if (demandes.length > 0) {
            demandes.forEach((obj) => {
                data += "<tr>";
                data += "<td>" + obj.id + "</td>";
                data += "<td>" + obj.nom + "</td>";
                data += "<td>" + obj.prenom + "</td>";
                data += "<td>" + obj.dateDebut + "</td>";
                data += "<td>" + obj.dateFin + "</td>";

                data += "<td>" + obj.duree + "</td>";
                data += "<td>" + obj.cause + "</td>";
                data +=
                    '<td><button data-toggle="modal" type="button" class="btn btn-primary"  data-target="#exampleModal" onclick="app.accepter(' +
                    demandes.indexOf(obj) +
                    ')">Accepter</button></td>';
                data +=
                    '<td><button class="btn btn-danger" onclick="app.refuser(' +
                    deamndes.indexOf(obj) +
                    ')">Refuser</button></td>';
                data += "</tr >";
            });
        }

        document.getElementById("tbody").innerHTML = data;
    };


    this.accepter=()=>{
        obj.statutDemande = "Accepté par sup";
        localStorage.setItem("demandes", JSON.stringify(demandes));
    }

    this.refuser=()=>{
        statutDemande = "Refusé";
        localStorage.setItem("demandes", JSON.stringify(demandes));
    }
})
