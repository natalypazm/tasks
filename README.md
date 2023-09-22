# Documentación del Aplicativo Web de Lista de Tareas en Angular

## Descripción

Este proyecto es una aplicación web CRUD (Crear, Leer, Actualizar y Eliminar) desarrollada en Angular. Permite a los usuarios gestionar una lista de tareas. La aplicación se conecta a una API en Firebase Firestore para almacenar y recuperar datos.

## Tecnologías Utilizadas

- Angular: El marco de trabajo de desarrollo web utilizado para crear la interfaz de usuario y gestionar las solicitudes HTTP.
- Firebase Firestore: La base de datos en la nube utilizada para almacenar y recuperar datos.
- Firebase Hosting: El servicio utilizado para alojar la aplicación web de Angular de forma pública.
- Firebase Functions: El servicio utilizado para implementar la API RESTful que interactúa con Firestore.
- RxJS: La biblioteca utilizada para manejar flujos de datos asincrónicos y solicitudes HTTP.
- Bootstrap: El marco de diseño de front-end utilizado para la interfaz de usuario.

## Funcionalidad

### Lista de Tareas

- Los usuarios pueden ver una lista de tareas existentes que se recuperan de Firestore.
- Cada tarea muestra su título y descripción.
- Los usuarios pueden marcar una tarea como completada o pendiente.
- Los usuarios pueden eliminar una tarea.
  
### Crear Nueva Tarea

- Los usuarios pueden crear una nueva tarea proporcionando un título y una descripción.
- La nueva tarea se agrega a Firestore y se muestra en la lista de tareas.
  
### Editar Tarea

- Los usuarios pueden editar una tarea existente, cambiando su título o descripción.
- Los cambios se guardan en Firestore y se reflejan en la lista de tareas.

## Estructura de Carpetas

- **src/app/components**: Contiene los componentes de Angular utilizados en la aplicación, como la lista de tareas, el formulario de creación y edición, etc.
- **src/app/services**: Contiene los servicios utilizados para interactuar con Firebase y realizar solicitudes HTTP.
- **src/app/models**: Define los modelos de datos utilizados en la aplicación, como el modelo de tarea.
- **src/environments**: Contiene los archivos de configuración de entorno para desarrollo y producción, donde se definen las URL de la API.
  
## Configuración
Para ejecutar la aplicación de forma local, asegúrate de tener Node.js y Angular CLI instalados. Luego, ejecuta `npm install` para instalar las dependencias y `ng serve` para iniciar el servidor de desarrollo.

La configuración de Firebase se encuentra en **[src/environments/environment.ts]**. Asegúrate de configurar las credenciales de Firebase para tu proyecto.

## Implementación
La implementación de la API RESTful en Firebase Functions se encuentra en la carpeta functions en la raíz del proyecto. Las funciones se definen en **[functions/src/index.ts]**.

Repositorio de la [API](https://github.com/natalypazm/api_tasks)

### Autor

Nataly Paz
