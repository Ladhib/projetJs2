var users = JSON.parse(localStorage.getItem("users")) || [];
var index;
var app = new (function () {
  this.tbody = document.getElementById("tbody");
  this.fetchall = () => {
    var data = "";
    if (users.length > 0) {
      users.forEach((obj,i) => {
        data += "<tr>";
        data += "<td>" + obj.nom + "</td>";
        data += "<td>" + obj.prenom + "</td>";
        data += "<td>" + obj.age + "</td>";
        data += "<td>" + obj.email + "</td>";
        data += "<td>" + obj.soldeCongé + "</td>";

        data += "<td>" + obj.password + "</td>";
        data += "<td>" + obj.poste + "</td>";
        data +=
         `<td><button data-toggle="modal" type="button" class="btn btn-primary"  data-target="#exampleModal" onclick="app.in(${i})">Edit</button></td>`;

        data +=
          `<td><button class="btn btn-danger" data-toggle="modal" data-target="#exampleModal2"onclick="app.in(${i})">Delete</button></td>`;
        data += "</tr >";
      });
    }
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("tbody").innerHTML = data;
  };


  this.in = (i) => {
    console.log(i);
    index = i;
    
  };


  this.edit = function (element) {
    const newNom = document.getElementById('newNom').value;
    const newPrenom = document.getElementById('newPrenom').value;
    const newAge = document.getElementById('newAge').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    var checkbox;
console.log("users"+users[index].nom);
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
  var soldee=users[index].soldeCongé
  var idUser=users[index].id
  console.log(soldee);
    var obj={
      id: idUser,
      nom:newNom,
      prenom:newPrenom,
      age:newAge,
      soldeCongé: soldee,
      email:newEmail,
      password:newPassword,
      poste:checkbox
    }
  
      users.splice(index,1,obj)
      localStorage.setItem("users", JSON.stringify(users));
      this.fetchall();
      }
    
  
    this.delete = () => {
      users.splice(index, 1);
      this.fetchall();
    };
  })
app.fetchall();
//logout:
function LOGOUT() {
  localStorage.removeItem("user");
  window.location.replace("login.html");
}
