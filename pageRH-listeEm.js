var users = JSON.parse(localStorage.getItem("users")) || [];
var app = new (function () {
  this.tbody = document.getElementById("tbody");
  this.fetchall = () => {
    var data = "";
    if (users.length > 0) {
      users.forEach((obj) => {
        data += "<tr>";
        data += "<td>" + obj.nom + "</td>";
        data += "<td>" + obj.prenom + "</td>";
        data += "<td>" + obj.age + "</td>";
        data += "<td>" + obj.email + "</td>";
        data += "<td>" + obj.soldeCongé + "</td>";

        data += "<td>" + obj.password + "</td>";
        data += "<td>" + obj.poste + "</td>";
        data +=
          '<td><button data-toggle="modal" type="button" class="btn btn-primary"  data-target="#exampleModal" onclick="app.edit(' +
          users.indexOf(obj) +
          ')">Edit</button></td>';

        data +=
          '<td><button class="btn btn-danger" onclick="app.delete(' +
          users.indexOf(obj) +
          ')">Delete</button></td>';
        data += "</tr >";
      });
    }
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("tbody").innerHTML = data;
  };

  this.edit = function (element) {
    const newNom = document.getElementById("newNom");
    const newPrenom = document.getElementById("newPrenom");
    const newAge = document.getElementById("newAge");
    const newScongé = document.getElementById("newScongé");
    const newEmail = document.getElementById("newEmail");
    const newPassword = document.getElementById("newPassword");
    users.map(e, (i) => {
      e.nom = newNom.value;
      e.prenom = newPrenom.value;
      e.age = newAge.value;
      e.SoldeCongé = newScongé.value;
      e.email = newEmail.value;
      e.password = newPassword.value;

      localStorage.setItem("users", JSON.stringify(users));
      this.fetchall();
    });
  };
  this.delete = (obj) => {
    users.splice(obj, 1);
    this.fetchall();
  };
})();

app.fetchall();

//logout:
function LOGOUT() {
  localStorage.removeItem("user");
  window.location.replace("login.html");
}
