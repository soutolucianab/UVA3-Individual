// Escucha el evento 'submit' del formulario
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    
    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Redirige a la página del mensaje con los datos del formulario en la URL
    window.location.href = `mensaje.html?nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}&fechaNacimiento=${encodeURIComponent(fechaNacimiento)}`;
});
