# 📱 Prácticas de desarrollo con Ionic y Angular

Este repositorio reúne prácticas de desarrollo de aplicaciones realizadas con **Ionic, Angular y TypeScript**. Su propósito es explorar cómo se construye una aplicación por páginas y componentes, cómo se navega entre secciones y cómo se organiza la lógica mediante servicios.

El proyecto principal se encuentra en la carpeta `IONIC-BASIC`. En lugar de presentar una sola función, la aplicación reúne varios ejercicios: consulta de recetas, administración de alumnos y destinos, autenticación y uso de funciones como la cámara o la ubicación. Esto me permitió practicar tanto la creación de interfaces como el manejo de datos y la integración de distintas herramientas.

## ✨ ¿Qué contiene el proyecto?

### 🍽️ Recetas

Incluye una página que muestra un listado de recetas y permite abrir el detalle de cada una. La información se obtiene de un servicio dentro de la aplicación. Esta sección sirve para practicar la presentación de listas, el paso de un identificador entre páginas y la consulta de un elemento específico.

### 🎓 Alumnos

Permite trabajar con un listado de alumnos que incluye nombre y matrícula. Desde la interfaz se pueden agregar registros, seleccionar uno para editarlo y eliminarlo. También se comprueba que los campos necesarios tengan información antes de guardar.

La lógica de los alumnos está separada en un servicio, lo que ayuda a mantener organizadas las responsabilidades de la página y del manejo de datos.

### 📍 Destinos

Contiene una sección para registrar, consultar, editar y eliminar lugares. El formulario solicita un nombre y el código contempla la obtención de coordenadas mediante geolocalización. Los destinos se relacionan con servicios de almacenamiento y con un componente de mapa.

También hay una sección llamada `destinos-api`, creada para practicar peticiones a una API. Esa parte requiere un servidor externo para responder a las solicitudes.

### 🔐 Registro e inicio de sesión

El proyecto incluye pantallas de registro e inicio de sesión, formularios con validaciones y código para gestionar la autenticación con Firebase. Además, utiliza rutas y un guard para controlar el acceso a determinadas secciones.

### 🖼️ Galería

Incluye una práctica para trabajar con fotografías mediante las funciones de Capacitor. Esta sección permite explorar cómo una aplicación Ionic puede utilizar capacidades del dispositivo.

## 🛠️ Tecnologías utilizadas

- 📱 **Ionic:** componentes visuales y estructura de la aplicación.
- 🅰️ **Angular:** páginas, navegación, formularios y servicios.
- 🔷 **TypeScript:** lógica y organización del código.
- 🌐 **HTML y SCSS:** contenido y estilos de las pantallas.
- 🔥 **Firebase:** funciones de autenticación y almacenamiento utilizadas en el proyecto.
- ⚡ **Capacitor:** acceso a características del dispositivo, como la cámara y la geolocalización.

## 📂 Organización del repositorio

```text
iomic-basic-1867320/
├── IONIC-BASIC/       # Aplicación principal
│   └── src/app/       # Páginas, componentes, servicios e interfaces
└── alumnos/           # Archivos de otra práctica sobre alumnos
```

Dentro de `IONIC-BASIC/src/app/`, las **páginas** contienen las vistas de cada sección; los **componentes** reúnen partes reutilizables de la interfaz; los **servicios** concentran operaciones sobre datos o conexiones externas; y las **interfaces** describen la estructura de la información utilizada.

## 🚀 Cómo ejecutar el proyecto

1. Instala **Node.js**.
2. Descarga el repositorio y descomprímelo.
3. Abre una terminal dentro de la carpeta `IONIC-BASIC`.
4. Instala las dependencias:

   ```bash
   npm install
   ```

5. Inicia la aplicación:

   ```bash
   npm start
   ```

6. Abre en el navegador la dirección local indicada en la terminal.

**Nota:** algunas secciones necesitan configuración o servicios adicionales. Las funciones de Firebase requieren su configuración correspondiente; la geolocalización necesita permisos del navegador y la sección `destinos-api` espera una API en `localhost`. Por ello, esas funciones pueden no estar disponibles con solo iniciar la aplicación.

## 💡 ¿Qué aprendí con este proyecto?

Esta práctica me ayudó a comprender mejor la estructura de una aplicación con Ionic y Angular. Trabajé con rutas, componentes, formularios, validaciones y servicios, además de integrar funciones que dependen del navegador, del dispositivo o de herramientas externas.

## Proyecto académico de desarrollo de aplicaciones con Ionic y Angular.
