let estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
if (!estudiantes) {
  estudiantes = [];
}

function ingresar(event) {
  event.preventDefault();  // Evitar que el formulario recargue la página
  
  let email = document.getElementById("name").value;
  let password = document.getElementById("pwd").value;

  let usuarioEncontrado = false; // Variable para saber si encontramos el usuario
  
  for (let estudiante of estudiantes) {
    if (estudiante.email === email && estudiante.password === password) {
      // Almacenar solo el email del usuario en localStorage
      localStorage.setItem("usuarioEmail", email);
      
      alert("Usuario ingresó con éxito");
      window.location.href = "index.html";
      usuarioEncontrado = true;
      break; // Ya no es necesario seguir buscando
    } 
    else if (estudiante.email === email && estudiante.password !== password) {
      alert("Contraseña incorrecta");
      usuarioEncontrado = true;
      break; // Ya no es necesario seguir buscando
    }
  }

  if (!usuarioEncontrado) {
    alert("Correo no registrado");
    window.location.href = "register_user.html";
  }
}


window.onload = function() {
    // Recuperamos el email del usuario desde localStorage
    let usuarioEmail = localStorage.getItem("usuarioEmail");
  
    if (usuarioEmail) {
      // Recuperamos el array de estudiantes desde localStorage
      let estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
  
      // Buscamos al estudiante que coincide con el email guardado en localStorage
      for (let estudiante of estudiantes) {
        if (estudiante.email === usuarioEmail) {
          // Actualizamos el nombre del usuario en el DOM
          document.querySelector(".user-name").textContent = estudiante.nombre;

          break;  // Ya encontramos el usuario, no necesitamos seguir buscando
        }
      }
    } else {
      // Si no hay usuario logueado, podrías redirigir o mostrar un mensaje
      console.log("Usuario no logueado");
    }
  }
// -------------------------------------------------------------------------------------------------
window.onload = function() {
    // Recuperar el email del usuario desde localStorage
    let usuarioEmail = localStorage.getItem("usuarioEmail");
    let loginItem = document.querySelector('nav ul li a[href="login.html"]');

    if (usuarioEmail) {
        // Si hay un usuario logueado, ocultar el ítem de "Inicio de sesión"
        if (loginItem) {
            loginItem.parentElement.style.display = "none";
        }

        // Recuperar el nombre del usuario desde estudiantes
        let estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
        for (let estudiante of estudiantes) {
            if (estudiante.email === usuarioEmail) {
                // Actualizar el nombre del usuario en el DOM
                document.querySelector(".user-name").textContent = estudiante.nombre;
                break;
            }
        }
    } else {
        console.log("Usuario no logueado");
    }
};