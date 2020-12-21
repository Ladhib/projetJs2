var demandes = JSON.parse(localStorage.getItem("demandes")) || [];

var app = new (function () {
  this.card = document.getElementById("card");
  this.fetchall = () => {
    var data = "";
    if (demandes.length > 0) {
      demandes.forEach((element) => {
        data += '<div class="card text-center" id="card">';
        data += '<div class="card-body">';
        data += "<h2>" + "Nom : " + element.nom + "</h2>";
        data += "<h2>" + element.prenom + "</h2>";
        data += "<h2>" + element.dateDebut.age + "</h2>";
        data += "<h2>" + element.dateFin + "</h2>";
        data += "<h2>" + element.cause + "</h2>";
        data += "<h2>" + element.statutDemande + "</h2>";
        data +=
          '<button class="btn btn-danger" onclick="app.delete(' +
          demandes.indexOf(element) +
          ')">Delete</button>';
        data += "</div>";
        data += "</div>";
      });
      localStorage.setItem("demandes", JSON.stringify(demandes));
      document.getElementById("card").innerHTML = data;
    }
  };
  //   this.edit = function (element) {
  //     var el = document.getElementById("edit-todo");
  //     el.value = users[element];
  //     document.getElementById("edit-box");
  //     self = this;
  //     document.getElementById("save-edit").onsubmit = function () {
  //       var task = el.value;
  //       if (task) {
  //         users.splice(element, 1, task.trim());
  //         self.fetchall();
  //       }
  //     };
  //     this.fetchall();
  //   };

  //   this.delete = (obj) => {
  //     users.splice(obj, 1);
  //     this.fetchall();
  //   };
})();

app.fetchall();
