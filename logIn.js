var users = JSON.parse(localStorage.getItem("users"));

function seConnecter() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email != "" && password != "") {
    const utlisateur = users.find((element) => element.email == email && element.password == password);

    if (utlisateur != undefined) {
        if (utlisateur.poste == 0) {
          localStorage.setItem("user", JSON.stringify(utlisateur));
          location.replace("pageEm.html")
          
        } else if (utlisateur.poste == 1) {
          localStorage.setItem("user", JSON.stringify(utlisateur));
          window.location.href ="pageSUP.html"
          
        } else if (utlisateur.poste == 2) {
         
          localStorage.setItem("user", JSON.stringify(utlisateur));
          window.location.href = "pageRH.html";
          
        }
    
    } else alert("email or password invalid! try again or sign up");
  } else alert("remplissez tous les champs!");
}
