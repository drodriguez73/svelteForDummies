# Tailwind

[Video](https://www.youtube.com/watch?v=7hHUnYDr9kQ) muy simple y corto de lo que es [Tailwind](https://tailwindcss.com/)

A la hora de experimentar con el codigo este [editor online](https://play.tailwindcss.com) es genial y junto con la [documentacion](https://tailwindcss.com/docs/installation) se convierten en un kit para dar batalla a lo que venga.



## Install Tailwind CSS with SvelteKit

La doc oficial dice esto [Setup Inicial entre Svelte y Tailwind](https://tailwindcss.com/docs/guides/sveltekit). La guia que esta a continuacion se basa justamente en la oficial pero con una modificacion xq sino me tira **error**

IntelliSense for [VS Code](https://tailwindcss.com/docs/editor-setup#intelli-sense-for-vs-code) nos va a facilitar mucho el diseño para los que utilizamos este ide

Estas son otras guias no oficiales que en algun momento vale mirarla


How to set up Svelte using Vite and [Tailwind]( https://medium.com/@mdwikycahyo/how-to-set-up-svelte-using-vite-and-tailwind-css-617040ebccec) CSS, otra es Get started with [Tailwind](https://tailwindcss.com/docs/installation) CSS y por ultimo Install [Tailwind CSS](https://larainfo.com/blogs/install-tailwind-css-in-sveltekit-vite-typescript) in Sveltekit + Vite + Typescript




### Creamos el proyecto svelte

En primer lugar creamos como lo hacemos siempre el proyecto en svelte

`npm create vite@latest tailwind -- --template svelte`

### Instalamos Tailwind

Tenemos que instalar tailwindcss y las dependencias y compatibilidad con svelte

`npm install -D tailwindcss postcss autoprefixer svelte-preprocess`

y asi, con el siguiente comando, ya podemos generar los archivos de conf propios de tailwind *tailwind.config.cjs* and *postcss.config.cjs*.

`npx tailwindcss init tailwind.config.cjs -p`

### Activamos a tailwind postcss en los bloques style de svelte

Para que podamos escribir codigo tailwind en los bloques style de nuestros componentes svelte tenemos que editar/crear el archivo *svelte.config.js* y agregar lo siguiente

```
import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
```

pero si corremos con ese codigo la app tira errores por todos lados, ahora el siguiente codigo funciona, mira

```
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
```


### Configure your template paths

Add the paths to all of your template files in your tailwind.config.cjs file.
Replace the content var.

```
content: ['./src/**/*.{html,js,svelte,ts}'],
```

### Add the Tailwind directives to your CSS

Debemos agregar las siguientes directivas css a nuestra app. La doc dice que las agreguemos en */src/app.css*

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Finalmente

`npm run dev`


## Tips basicos

How to [Create](https://www.devwares.com/blog/how-to-create-tailwind-css-tables/) a Table
