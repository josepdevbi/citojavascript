let estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
if (!estudiantes) {
    estudiantes = [];  // Si no hay estudiantes, inicializa como un arreglo vacío
}

function registrar(event) {
    event.preventDefault();
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    let rpassword = document.getElementById("rpwd").value;

    if (nombre == "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    if (apellido == "") {
        alert("El apellido no puede estar vacío.");
        return;
    }

    if (email == "") {
        alert("El email no puede estar vacío.");
        return;
    }

    if (password != rpassword) {
        alert("Las contraseñas deben coincidir.");
        return;
    }

    // Crear el objeto estudiante
    let estudiante = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        rpassword:rpassword
    };

    // Verificar si el correo electrónico ya está registrado
    for (let e of estudiantes) {
        if (e.email == email) {
            alert("El usuario ya está registrado.");
            return;
        }
    }

    // Si el correo no está registrado, agregar el estudiante al array
    estudiantes.push(estudiante);

    // Guardar en localStorage
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    alert("Usuario registrado exitosamente.");
    window.location.href = "login.html";
}
