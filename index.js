document.addEventListener("DOMContentLoaded", function () {
  //Boton Input cambiar la visibilidad
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");
  //Botones
  const loginButton = document.getElementById("login-button");
  const logoutButton = document.getElementById("logout-button");
  const cancelButton = document.getElementById("cancel-button");
  //Formulario
  const loginForm = document.getElementById("login-form");
  //Estados
  const usernameInput = document.getElementById("username");
  const loggedInStatus = document.getElementById("logged-in-status");


  togglePassword.addEventListener("click", function () {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });

  
  loginForm.addEventListener("submit", function (event) {
    console.log(event.target.value);
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    console.log(username, password);
    if (!username || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    sessionStorage.setItem("loggedInUser", username);
    showLoggedInState();
  });

  if (sessionStorage.getItem("loggedInUser")) {
    showLoggedInState();
  }

  logoutButton.addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    showLoggedOutState();
  });

  cancelButton.addEventListener("click", function () {
    usernameInput.value = "";
    passwordInput.value = "";
  });

  function showLoggedInState() {
    loginButton.style.display = "none";
    logoutButton.style.display = "inline-block";
    cancelButton.style.display = "none";
    logoutButton.classList.add("logout");
    loggedInStatus.style.display = "block";
    loggedInStatus.textContent = `Usuario logueado: ${sessionStorage.getItem(
      "loggedInUser"
    )}`;
  }

  function showLoggedOutState() {
    loginButton.style.display = "inline-block";
    logoutButton.style.display = "none";
    cancelButton.style.display = "inline-block";
    loggedInStatus.style.display = "none";
    usernameInput.value = "";
    passwordInput.value = "";
  }
});
