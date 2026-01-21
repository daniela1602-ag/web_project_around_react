Proyecto: Around The US - React
Red social para compartir fotos de lugares.

Este proyecto es la transferencia del sitio web "Around The US" de JavaScript vanilla a React, utilizando Vite como herramienta de construcción.
Las funcionalidades implementadas son: configuración del proyecto, transferencia de contenido, componentes creados.
Funcionalidades: visualización de tarjetas iniciales , apertura de popup de imagen al hacer click en una tarjeta , Popups de formularios (editar perfil y crear tarjetas) y cierre correcto de todos los popups.
Tecnologías utilizadas: React, Vite, CSS3 y JavaScript ES6+.

Segunda parte del proyecto: 
En esta segunda parte conectamos la aplicación a la API, se le dió funcionalidad a la edicion de avatar, perfil y creación de nuevas tarjetas, gestión likes y eliminación de cada tarjeta y de igual forma, se conectaron a la API, se actualizaron los datos ya guardados de la API.
Tecnologias aplicadas: se utilizaron Hook, específicamente useState, useEffect, useRef, useContext.
En esta esta etapa, para EditProfile utilicé la gestión de componentes con useState como herramienta, y en EditAvatar utilicé useRef como herramienta, para obtener la información del usuario de la api utilicé useEffect y para dar esa información para varios componente utilicé useContext.
React + Vite, JavaScript ES6+, CSS3 y API REST.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


