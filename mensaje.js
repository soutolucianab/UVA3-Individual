window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre');
    const apellido = params.get('apellido');
    const fechaNacimiento = params.get('fechaNacimiento');

    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();
    const diferenciaTiempo = hoy - fechaNacimientoDate;
    const diasPasados = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            ¡Bienvenido, ${nombre} ${apellido}! Han pasado ${diasPasados} días desde tu fecha de nacimiento.
        </div>
    `;
});
