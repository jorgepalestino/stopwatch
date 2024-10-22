// Obtiene el elemento con id "display" del DOM para mostrar el cronómetro.
const display = document.getElementById("display");

// Inicializa la variable 'timer' que se usará para almacenar el intervalo del cronómetro.
let timer = null;

// Variable para almacenar el tiempo cuando se inicia el cronómetro.
let startTime = 0;

// Almacena el tiempo transcurrido desde que comenzó el cronómetro.
let elapsedTime = 0;

// Indica si el cronómetro está funcionando o no.
let isRunning = false;

// Función para iniciar el cronómetro.
function start() {
    // Solo inicia si el cronómetro no está ya corriendo.
    if (!isRunning) {
        // Calcula el tiempo de inicio restando el tiempo ya transcurrido.
        startTime = Date.now() - elapsedTime;
        // Inicia el intervalo que llama a la función 'update' cada 10 milisegundos.
        timer = setInterval(update, 10);
        // Marca que el cronómetro está corriendo.
        isRunning = true;
    }
}

// Función para detener el cronómetro.
function stop() {
    // Solo detiene si el cronómetro está corriendo.
    if (isRunning) {
        // Detiene el intervalo del cronómetro.
        clearInterval(timer);
        // Calcula el tiempo total transcurrido desde que comenzó.
        elapsedTime = Date.now() - startTime;
        // Marca que el cronómetro ya no está corriendo.
        isRunning = false;
    }
}

// Función para reiniciar el cronómetro.
function reset() {
    // Detiene el cronómetro si está corriendo.
    clearInterval(timer);
    // Reinicia el tiempo de inicio a 0.
    startTime = 0;
    // Reinicia el tiempo transcurrido a 0.
    elapsedTime = 0;
    // Marca que el cronómetro no está corriendo.
    isRunning = false;
    // Restablece el texto del cronómetro a "00:00:00:00" en el display.
    display.textContent = "00:00:00:00";
}

// Función que actualiza el tiempo mostrado en el cronómetro.
function update() {
    // Obtiene el tiempo actual en milisegundos.
    const currentTime = Date.now();
    // Calcula el tiempo transcurrido desde el inicio.
    elapsedTime = currentTime - startTime;

    // Calcula las horas a partir del tiempo transcurrido.
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    // Calcula los minutos, usando el operador % para obtener solo los minutos restantes.
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    // Calcula los segundos.
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    // Calcula los milisegundos, dividiéndolos por 10 para mostrar solo dos dígitos.
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Asegura que las horas tengan siempre dos dígitos.
    hours = String(hours).padStart(2, "0");
    // Asegura que los minutos tengan siempre dos dígitos.
    minutes = String(minutes).padStart(2, "0");
    // Asegura que los segundos tengan siempre dos dígitos.
    seconds = String(seconds).padStart(2, "0");
    // Asegura que los milisegundos tengan siempre dos dígitos.
    milliseconds = String(milliseconds).padStart(2, "0");

    // Actualiza el contenido del display con el formato "hh:mm:ss:ms".
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
