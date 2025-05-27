// Mostrar/ocultar contraseña
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "🙈";
  } else {
    input.type = "password";
    btn.textContent = "👁‍🗨";
  }
}

// REGISTRO
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const fullname = document.getElementById("fullname").value;
      const birthdate = document.getElementById("birthdate").value;
      const passError = document.getElementById("passError");

      // Validación con RegExp
      const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8}$/;
      if (!regex.test(password)) {
        passError.classList.remove("d-none");
        return;
      } else {
        passError.classList.add("d-none");
      }

      // Guardar en localStorage
      const userData = {
        user: username,
        email: email,
        pass: password,
        nombre: fullname,
        nacimiento: birthdate,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
      window.location.href = "index.html";
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("loginUser").value;
      const password = document.getElementById("loginPass").value;
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("❌ No hay usuarios registrados.");
        return;
      }

      if (username === user.user && password === user.pass) {
        alert("✅ Inicio de sesión exitoso");
        window.location.href = "dashboard.html";
      } else {
        alert("❌ Usuario o contraseña incorrectos");
      }
    });
  }
});
