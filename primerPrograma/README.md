# Svelte - Primer Programa

El siguiete resumen esta basado en [Svelte + Vite](https://www.youtube.com/watch?v=8YIGv78rj74) donde nos muestra paso a paso como crear nuestro primer programa utilizando la ultima version (@svelte 3.49 y @vite 3.0.9)

Ademas se basa en este otro [Migrar de Rollup a Vite](https://www.youtube.com/watch?v=J435Z9bfTG0) donde nos muestra como migrar app desde rollup (version anterior que utilizaba svelte) a vite. Ademas vemos mas detalles de que cosa es cada archivo.

## Mi primer app en svelte

Asi es como arranque con Svelte, creando la primer app "primerPrograma" que no es mas que una plantilla con las carpetas y modulos para arrancar a programar.

`npm create vite@latest primerPrograma -- --template svelte`

La linea anterior genera los templates o estruccutas para nuestro primer programa dentro de la carpeta primerPrograma (el mismo comando crea la carpeta en el path donde estamos parados). Vale aclarar que siempre miren [La documentacion de Svelte](https://svelte.dev/) ya que esta en pleno desarrollo y cambia con mucha frecuencia por el momento (23/8/22)

Bien, entoces acabamos de clonar un template basico desde github de svelte que esta preparado para utilizar **npm** y que el setup esta en el archivo package.json dentro de la misma capera.

Como cualquier proyecto en javascript y node tenemos que instalar las dependencias, entonces, entramos a la carpeta primerPrograma y ejecutaos:

`npm install`


### Analizando el contenido de la carpeta de nuestro primer programa

```
- public
  |
  |-- css
  |    |
  |    |-- home.css
  |
- src
  |
  |-- assets
  |    |
  |    |-- svelte.svg
  |
  |-- lib
  |    |
  |    |-- Counter.svelte
  |
  |-- app.css
  |-- App.svelte
  |-- main.js
  |-- vite-env.d.ts
  |-
- index.html
- package.json
- vite.config
```

index.html
```
<body>
	<div id="app"></div>
	<script type="module" src="/src/main.js"></script>
</body>
```

main.js
```
import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
```

App.svelte
```
<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="card">
    <Counter />
  </div>
</main>

<style>
</style>
```

Counter.svelte
```
<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
```

**CSS hojas de estilos**

Las podemos configurar desde el index.html utilizando el tag **link href** apuntando al archivo css dentro de la carpeta public, desde el main.js utilizando **import ./assets/app.css** donde cada modulo tiene su archivo css o desde dentro del mismo componente utilizando el **tag style**.
Ambos archivos css tienen visibilidad global y se pisan uno al otro en caso de tags con nombres duplicados, en cambio el codigo css dentro del tag style es unico, el compilador svelte se encaga de los id para que no se pisen.


Sevelte utiliza a vite como front end server y herramienta de compilacion, la conf esta en [vite.config.js](https://vitejs.dev/)

```
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}
```

Lo mas comun es que mientras desarrollemos utilicemos:

`npm run dev`

Esto va a ejecutar el servidor con nuesta primer aplicacion funcionando. Por defecto el servidor corre en: http://localhost:5173

Podemos ver mas parametros de configuracion ejecutando:

`npx vite --help`

Por ejemplo, si en modo desarrollo, queremos que escuche en todas las direccines y otro puerto

`"dev": "vite --host 0.0.0.0 --port 8080"`



