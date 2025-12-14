window.onload = function () {
    
    //DECLARACIÓN DE VARIABLES

    let personajes;
    const nombresContainer = document.querySelector(".nombres");
    const imagenesContainer = document.querySelector(".imagenes");
    const opcionesContainer = document.querySelector(".opciones");
    const infoPersonajes = document.querySelector(".info-personajes");
    const iniciarJuego = document.querySelector(".boton");
    const inicio = document.querySelector(".inicio");
    const juego = document.querySelector(".juego");
    const botonInfo = document.querySelector(".info");
    const reiniciar = document.querySelector(".reiniciar");
   
    const desplazamientoJuego = "0";
    const desplazamientoInfoPersonajes = "-3000px";

    let estadoActual = 'juego';

    //Agrega un evento de clic al botón con la clase .info
    botonInfo.addEventListener("click", alternarJuegoInfo);

/*********************************************************** *****************************************************************************************/
    /* 
    Si estadoActual es 'juego', cambiará a 'info' y mostrará información completa. 
    Si estadoActual es 'info', cambiará a 'juego' y restablecerá la visualización del juego.*/
    
    function alternarJuegoInfo() {
        infoPersonajes.innerHTML = "";

        if (estadoActual === 'juego') {
            estadoActual = 'info';
            mostrarInformacionCompleta();
        } else {
            estadoActual = 'juego';
            juego.style.top = "0";
            infoPersonajes.style.top = desplazamientoInfoPersonajes;
            document.body.classList.add("establece-scroll");
        }
    }
/*********BOTÓN (INICIAR JUEGO)********************************************************************************************************** ************/
    
        iniciarJuego.addEventListener("click", () => {
            inicio.style.top = "-3000px"; // Oculta la sección de inicio moviéndola fuera de la vista hacia arriba
            juego.style.top = desplazamientoJuego; // Muestra la sección del juego ajustando su posición superior según desplazamientoJuego
            reiniciar.style.top = "0"; // Muestra el botón de reinicio ajustando su posición superior a 0
            botonInfo.style.top = "0"; // Muestra el botón de información ajustando su posición superior a 0
            reiniciarJuego(); // Llama a la función reiniciarJuego
        });
/************************************************************************************************************************************************** */
        function verificarVictoria() {
            const nombresOpciones = document.querySelectorAll('.nombre-personaje');
            let todasCorrectas = true;

            for (const nombre of nombresOpciones) {
                if (nombre.style.backgroundColor !== 'green') {
                    todasCorrectas = false;
                    break;
                }
            }
            if (todasCorrectas) {
                 mostrarMensajeVictoria();
            }
        }
/*************************************************************************************************************************************************** */
        function mostrarMensajeVictoria() {
            const mensajeVictoria = document.createElement('div');
            mensajeVictoria.classList.add('mensaje-victoria');
            mensajeVictoria.textContent = '¡Enhorabuena! Has colocado todos los personajes correctamente';
    
            document.body.append(mensajeVictoria);
    
            setTimeout(() => {
                mensajeVictoria.style.opacity = '0';
               
                    mensajeVictoria.remove();
               
            }, 6000);
        }

/*******Función para mostrar la información de los personajes********************************************************************************** */
    
function mostrarInformacionCompleta() {
        infoPersonajes.innerHTML = ""; 

        for (const personaje of personajes) {
            // Construir la ficha completa 
            const fichaCompleta = `
                <div class="rotate-container">
                    <div class="ficha-back">
                        <h4>${personaje.nombre}</h4>
                        <p>${personaje.info}</p>
                        <button onclick="rotarFicha(this)" class="btn-rotate">
                            <i class="fa fa-long-arrow-left"></i>&nbsp;Volver
                        </button>
                    </div>
                    <div class="ficha-front">
                        <h4>${personaje.nombre}</h4>
                        <img src="${personaje.imagen}">
                        <button class="btn-rotate" onclick="rotarFicha(this)">+ Info &nbsp;
                            <i class="fa fa-long-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
        
            infoPersonajes.innerHTML += fichaCompleta; // Agregar la ficha completa al contenedor de información
        }
        

        infoPersonajes.style.top = "0"; // Mostrar el contenedor de información estableciendo 'top' a "0"

        document.body.classList.remove("establece-scroll"); // Restablecer la capacidad de desplazamiento en la página
    }
/***************************************************************************************************************************************** ****************/
    //Evento de clic en el botón con la clase "reiniciar"
    reiniciar.addEventListener("click", reiniciarJuego);

       function reiniciarJuego() {
            nombresContainer.innerHTML = "";
            imagenesContainer.innerHTML = "";
            opcionesContainer.innerHTML = "";
            inicializarJuego();
        }

/*********Cargar los datos de personajes desde un archivo JSON*********************************************************************** */
    async function cargarPersonajes() {
        const respuesta = await fetch('./imagenes.json');
        return (await respuesta.json());
    }
/************************************************************************************************************************************************************* */
    function obtenerPersonajesAleatorios(personajes, cantidad) {
        const personajesAleatorios = [];
        const copiaPersonajes = [...personajes];
        
        for (let i = 0; i < cantidad && i < copiaPersonajes.length; i++) {
            const indice = Math.floor(Math.random() * copiaPersonajes.length);
            const personaje = copiaPersonajes.splice(indice, 1)[0];
            personajesAleatorios.push(personaje);
        }
        return personajesAleatorios;
    }

  /************************************************************************************************************************************************************** */  
    function mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

  /*******Crear elementos div según el tipo de contenido (imagen, nombre u opción) y la información del personaje.*************************************************************************************************************************************************************** */  

    function crearElementoDiv(tipo, personaje) {
        const divElement = document.createElement("div");

        if (tipo === "imagen") {
            // Si es de tipo "imagen", establece la imagen de fondo, clase y dataset
            divElement.style.backgroundImage = `url(${personaje.imagen})`;
            divElement.classList.add("imagen-personaje");
            divElement.dataset.id = personaje.id;
        
        } else if (tipo === "nombre") {
            divElement.classList.add("nombre-personaje");
            divElement.dataset.id = personaje.id;
        
        } else if (tipo === "opcion") {
            divElement.draggable = true;
            divElement.textContent = personaje.nombre;
            divElement.classList.add("nombre-opcion");
            divElement.dataset.id = personaje.id;
        }

        return divElement;
    }


    /************************************************************************************************************************************************************ */

    async function inicializarJuego() {
            personajes = await cargarPersonajes(); // Cargar la información de los personajes

            // Obtener personajes aleatorios para la parte izquierda del juego
            const personajesIzquierda = obtenerPersonajesAleatorios(personajes, 4);
    
            // Crear y agregar elementos de imagen para la parte izquierda
            for (const personaje of personajesIzquierda) {
                const imagenDiv = crearElementoDiv("imagen", personaje);
                imagenesContainer.append(imagenDiv);
            }
            

            // Crear y agregar elementos de nombre vacíos para la parte izquierda
            const divsVacios = [];

            for (const personaje of personajesIzquierda) {
                const nombreDiv = crearElementoDiv("nombre", personaje);
                nombresContainer.append(nombreDiv);
                divsVacios.push(nombreDiv);
            }           


            // Crear opciones mezcladas y agregar elementos de opción
            const personajesOpciones = mezclarArray(personajes);

            // Iterar sobre las opciones de personajes y crear elementos div para cada opción
            for (const personaje of personajesOpciones) {
                const opcionDiv = crearElementoDiv("opcion", personaje);
                opcionesContainer.append(opcionDiv);
            }

            // Obtener referencias a las opciones y los nombres
            const opciones = document.querySelectorAll('.nombre-opcion');
            const nombres = document.querySelectorAll('.nombre-personaje');


/*******************EVENTOS DRAG AND DROP*************************************************************************************************************************/   

            /*EVENTO DRAGSTART (Datos que se transfieren durante el proceso de arrastre) */
       
            for (const opcion of opciones) {
                opcion.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', opcion.dataset.id);
                });
            }
            

            /* EVENTO DRAGOVER (Qué elementos pueden ser soltados en una ubicación)*/ 
            
            for (const nombre of nombres) {
                nombre.addEventListener('dragover', (e) => {
                    if (nombre.style.backgroundColor !== 'green') {
                        e.preventDefault();
                    }
                });

                /* EVENTO DROP */ 
                
                nombre.addEventListener('drop', (e) => {
                    e.preventDefault();
                    const idOpcion = e.dataTransfer.getData('text/plain');
                    // Busca la opción en el array 'opciones'
                    let opcion;

                    for (const option of opciones) {
                        if (option.dataset.id === idOpcion) {
                            opcion = option;
                            break;
                        }
                    }

                    // Verifica si el 'nombre' coincide con el id de la opción arrastrada
                    if (nombre.dataset.id === idOpcion) {
                        nombre.style.backgroundColor = 'green';
                        nombre.textContent = opcion.textContent;
                        nombre.style.color = 'white';
                        nombre.style.fontWeight = 'bold';
                        nombre.style.fontSize = '22px';
                        nombre.style.cursor = 'not-allowed';
                        opcion.remove();
                        verificarVictoria();
                    
                    } else {
                        nombre.style.backgroundColor = 'red';
                        setTimeout(() => {
                            nombre.style.backgroundColor = '';
                        }, 2000);
                    } 

                });
        
            };
    
    } //FIN FUNCIÓN (inicializarJuego)

    inicializarJuego();



};
