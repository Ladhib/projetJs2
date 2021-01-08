var users = JSON.parse(localStorage.getItem("users")) || [];
var index;
var soldee;
var idUser;
var app = new (function () {
  this.tbody = document.getElementById("tbody");

  this.fetchall = () => {
    var data = "";
    if (users.length > 0) {
      users.forEach((obj, i) => {
        data += "<tr>";
        data += "<td>" + obj.nom + "</td>";
        data += "<td>" + obj.prenom + "</td>";
        data += "<td>" + obj.age + "</td>";
        data += "<td>" + obj.email + "</td>";
        data += "<td>" + obj.soldeCongé + "</td>";

        data += "<td>" + obj.password + "</td>";
        data += "<td>" + obj.poste + "</td>";
        data += `<td><button data-toggle="modal" type="button" class="btn btn-primary"  data-target="#exampleModal" onclick="app.in(${i})">Edit</button></td>`;

        data +=
          '<td><button class="btn btn-danger" onclick="app.delete(' +
          users.indexOf(obj) +
          ')">Delete</button></td>';
        data += "</tr >";
      });
    }
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("tbody").innerHTML = data;
    console.log(users);
  };
  // this.fetchall();
  this.in = (i) => {
    index = i;
    console.log(index);
  };

  this.edit = function () {
    const newNom = (document.getElementById("newNom").value = users[index].nom);
    const newPrenom = document.getElementById("newPrenom").value;
    const newAge = document.getElementById("newAge").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;
    var checkbox;

    EM = document.getElementById("inlineRadio1");
    SUP = document.getElementById("inlineRadio2");
    RH = document.getElementById("inlineRadio3");

    if (EM.checked == true) {
      var checkbox = document.getElementById("inlineRadio1").value;
    } else if (SUP.checked == true) {
      var checkbox = document.getElementById("inlineRadio2").value;
    } else if (RH.checked == true) {
      var checkbox = document.getElementById("inlineRadio3").value;
    }
    // var idUser =;
    soldee = users[index].soldeCongé;
    idUser = users[index].id;
    var obj = {
      id: idUser,
      nom: newNom,
      prenom: newPrenom,
      age: newAge,
      soldeCongé: soldee,
      email: newEmail,
      password: newPassword,
      poste: checkbox,
    };

    users.splice(index, 1, obj);
    localStorage.setItem("users", JSON.stringify(users));
    this.fetchall();
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
