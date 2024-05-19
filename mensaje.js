// Espera a que el contenido de la página esté completamente cargado
window.addEventListener('DOMContentLoaded', function() {
    // Obtiene los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre');
    const apellido = params.get('apellido');
    const fechaNacimiento = params.get('fechaNacimiento');

    // Calcular los días pasados desde la fecha de nacimiento
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();
    const diferenciaTiempo = hoy - fechaNacimientoDate; // Diferencia en milisegundos
    const diasPasados = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)); // Convertir a días

    // Mostrar el mensaje de bienvenida y los días pasados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            ¡Bienvenidx, ${nombre} ${apellido}! Han pasado ${diasPasados} días desde tu fecha de nacimiento.
        </div>
    `;
});
