# 🎮 ¿Quién es este personaje de Disney? – Drag & Drop Game (HTML · CSS · JavaScript)

![Banner Juego Disney](https://github.com/mariarosete/REPO_AQUI/blob/main/screenshots/banner.png?raw=true)

Proyecto frontend desarrollado con **HTML, CSS y JavaScript (Vanilla)**, centrado en la implementación de **Drag & Drop**, lógica de juego, carga dinámica de datos y experiencia de usuario.

El proyecto consiste en un **juego interactivo** donde el usuario debe asociar correctamente personajes de Disney con sus nombres, recibiendo feedback visual inmediato y pudiendo consultar información adicional de cada personaje.

---

## ✨ Características principales

## 🎯 Juego Drag & Drop – Personajes Disney

### 🧩 Mecánica del juego
- En cada partida se muestran **4 personajes aleatorios**.
- El usuario debe **arrastrar los nombres** desde una lista de opciones hasta el contenedor correcto.
- Las opciones incluyen personajes adicionales para aumentar la dificultad.
- Cada reinicio genera una **nueva combinación aleatoria**.

### 🖱️ Drag & Drop con validación
- Implementación de la **Drag & Drop API** de JavaScript:
  - `dragstart`
  - `dragover`
  - `drop`
- Validación automática:
  - ✔️ Correcto → se marca en **verde**, se bloquea y se elimina la opción.
  - ❌ Incorrecto → se marca en **rojo** de forma temporal.
- Verificación de victoria cuando todos los personajes están bien colocados.

### 🏆 Mensaje de victoria
- Al completar correctamente todos los personajes:
  - Se muestra un **mensaje de enhorabuena**.
  - Feedback visual claro para el usuario.

---

## 🧭 Navegación y pantallas

### 🚀 Pantalla de inicio
- Pantalla de bienvenida con explicación del juego.
- Botón **Iniciar Juego** para comenzar la partida.

### 🔄 Reinicio de partida
- Botón **Reiniciar** visible durante el juego.
- Limpia el estado actual y genera una nueva combinación aleatoria.

### ℹ️ Sección de información
- Botón **Info** para acceder a una vista alternativa.
- Muestra **fichas completas de personajes**, con:
  - Imagen
  - Nombre
  - Descripción
- Animación tipo **flip** para mostrar información adicional.
- Botón para volver al juego.

---

## 🎨 Diseño y experiencia de usuario

- Diseño visual cuidado con fondo temático.
- Feedback visual inmediato mediante colores y tipografía.
- Interfaz clara y accesible.
- Uso de animaciones y transiciones para mejorar la experiencia.
- Separación clara entre:
  - Zona de imágenes
  - Zona de nombres
  - Zona de opciones

---

## 🗂️ Gestión de datos

- Los personajes se cargan dinámicamente desde un archivo **JSON**.
- Uso de `fetch` para obtener los datos.
- Aleatorización de personajes y opciones en cada partida.
- Código estructurado en funciones reutilizables.

---

## 🛠️ Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Drag and Drop](https://img.shields.io/badge/Drag%20%26%20Drop-API-blue?style=for-the-badge)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

---

## 🚀 Objetivo del proyecto

- Practicar **JavaScript Vanilla** sin frameworks.
- Implementar correctamente la **Drag & Drop API**.
- Trabajar la **lógica de juego** y validación de acciones.
- Cargar datos dinámicamente desde **JSON**.
- Mejorar la **experiencia de usuario** con feedback visual y animaciones.
- Desarrollar un proyecto completo, funcional y bien documentado.

---

## 💻 Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/mariarosete/REPO_AQUI.git
   ```


 2. Abre el archivo index.html en tu navegador (o usa Live Server en VS Code).`

 3. ¡Disfruta del juego! 🎉

---

## 📩 Contacto

<p align="center">
  <a href="mailto:marlarosete89@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://linkedin.com/in/mariarosetesuarez">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/mariarosete">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://mariarosete.vercel.app/">
    <img src="https://img.shields.io/badge/Portafolio-000000?style=for-the-badge&logo=vercel&logoColor=white"></a>
</p>

---

<p align="center">Desarrollado con ❤️ por <b>María Rosete Suárez</b> </p>



