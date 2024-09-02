# Recipe App

<!-- Puedes incluir una imagen si tienes una o eliminar esta línea -->

## Descripción

Recipe App es una aplicación web que permite a los usuarios gestionar recetas de cocina. Los usuarios pueden registrarse, iniciar sesión, agregar nuevas recetas, ver detalles de las recetas, y eliminar recetas. La aplicación está construida con React y utiliza Tailwind CSS para el estilo.

## Características

- **Registro e Inicio de Sesión de Usuarios:** Permite a los usuarios registrarse e iniciar sesión en la aplicación.
- **Agregar Recetas:** Los usuarios pueden crear nuevas recetas, especificando el nombre, la descripción, y los ingredientes.
- **Ver Lista de Recetas:** Se muestra una lista de todas las recetas agregadas con la opción de ver más detalles.
- **Ver Detalles de Recetas:** Los usuarios pueden ver detalles completos de una receta, incluyendo nombre, descripción, ingredientes, y el nombre del usuario que la agregó.
- **Eliminar Recetas:** Los usuarios pueden eliminar recetas que hayan agregado.
- **Persistencia de Datos:** Las recetas se almacenan en `localStorage`, lo que permite que las recetas permanezcan disponibles incluso después de recargar la página.

## Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS** - Framework de CSS para crear diseños personalizados y responsivos.
- **Vite** - Herramienta rápida de desarrollo frontend que facilita la configuración y construcción del proyecto.
- **Git y GitHub** - Para control de versiones y alojamiento del código.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

Sigue los pasos a continuación para configurar y ejecutar el proyecto en tu máquina local.

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/Recipes-App.git
   cd Recipes-App
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar la aplicación:**

   ```bash
   npm run dev
   ```

   La aplicación se abrirá en `http://localhost:5173` en tu navegador.

## Estructura del Proyecto

```bash
├── src
│   ├── assets          # Archivos estáticos
│   ├── components      # Componentes reutilizables de React
│   ├── context         # Contextos para manejar el estado global
│   ├── hooks           # Hooks personalizados
│   ├── pages           # Páginas principales de la aplicación
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── index.jsx       # Punto de entrada del proyecto
│   └── index.css       # Estilos globales
├── .gitignore          # Archivos y directorios ignorados por Git
├── package.json        # Dependencias y scripts del proyecto
├── postcss.config.cjs  # Configuración de PostCSS y Tailwind CSS
├── tailwind.config.js  # Configuración de Tailwind CSS
├── vite.config.js      # Configuración de Vite
└── README.md           # Documentación del proyecto
```

## Uso

### Registro de Usuario

1. Navega a la página de registro.
2. Completa el formulario con tu nombre de usuario y contraseña.
3. Haz clic en "Register" para crear tu cuenta.

### Inicio de Sesión

1. Navega a la página de inicio de sesión.
2. Ingresa tu nombre de usuario y contraseña.
3. Haz clic en "Login" para acceder a la aplicación.

### Agregar Recetas

1. Una vez logueado, haz clic en "Add Recipe" en la barra de navegación.
2. Completa el formulario con el nombre de la receta, descripción e ingredientes.
3. Haz clic en "Add Recipe" para guardar la receta.

### Ver y Eliminar Recetas

- Las recetas se muestran en la página principal. Haz clic en "View Details" para ver más información sobre una receta.
- Los usuarios pueden eliminar sus propias recetas haciendo clic en el botón "Delete".

¡Gracias por usar Recipe App! 🍽️
