# Hito 1 de la Unidad de React js

En este hito empezamos a usar react neative, este desafio se enfoca solo en Frontend para la creacion de una pagina web de una pizzeria.

## Link a la pizzeria

[Pizzeria Mamma Mia](https://adol-33.github.io/hito-1-react/)

## Estructura de carpetas

- dist
- node_modules
- public
- src
- .gitignore
- eslint.config.js
- index.html
- package-log.json
- package.json
- vite.config.js

## Instalaciones

Tienes que crear un proyecto de React con Vite usando `npm create vite@latest`
Para el despliegue en github pages se instala gh-pages `npm i gh-pages`
Se configura el archivo "/vite.config.js" agregando el nombre del repositorio `base: "/hito-1-react/",`
Se agrega al archivo "/package.json"

- Scripts:
  - `"hompage": "https://adol-33.github.io/hito-1-react/"`
  - `"predeploy": "npm run build"`
  - `"deploy": "gh-pages -d dist"`

Se contruye el build con `npm run build`

## Uso

Esta es una pagina para un Pizzeria donde se visualizan las Pizzas, precio y ingredientes, se pueden agregar pizzas al carrito, lo que da un total al pagar.

## Licencia

Esta pagina fue creada por **Adolfo Antequera** 2026. Para la entrega de un Desafio del Boopcam de Desafio Latam.
