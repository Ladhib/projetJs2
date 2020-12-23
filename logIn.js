function seConnecter() {
  var users = JSON.parse(localStorage.getItem("users"));
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email != "" && password != "") {
    const user = users.find((element) => element.email == email && element.password == password);

    if (user != undefined) {
      users.forEach((element) => {
        if (element.poste == 0) {
          user.connected = true;
          window.location.href = "PageEM.html";
          localStorage.setItem("user", JSON.stringify(user));
        } else if (element.poste == 1) {
          user.connected = true;
          window.location.href = "pageSUP.html";
          localStorage.setItem("user", JSON.stringify(user));
        } else if (element.poste == 2) {
          user.connected = true;
          window.location.href = "pageRH.html";
          localStorage.setItem("user", JSON.stringify(user));
        }
      });
    } else alert("email or password invalid! try again or sign up");
  } else alert("remplissez tous les champs!");
}
