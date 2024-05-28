document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    window.location.href = `mensaje.html?nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}&fechaNacimiento=${encodeURIComponent(fechaNacimiento)}`;
});
