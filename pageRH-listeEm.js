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

  this.delete = (obj) => {
    users.splice(obj, 1);
    this.fetchall();
  };
})();

app.fetchall();
