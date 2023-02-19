# Tailwind

[Video](https://www.youtube.com/watch?v=7hHUnYDr9kQ) muy simple y corto de lo que es [Tailwind](https://tailwindcss.com/)

A la hora de experimentar con el codigo este [editor online](https://play.tailwindcss.com) es genial y junto con la [documentacion](https://tailwindcss.com/docs/installation) se convierten en un kit para dar batalla a lo que venga.


# Integracion de Tailwind con Svelte

Podemos integrarlo de dos maneras distintas, esto va a depender de como estemos utilizando a svelte. Cada una de estas caracteristicas las vamos a ver luego de comprender algunos aspectos basicos a ambos.

### Dependencias

[PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript

[Svelte Preprocess](https://github.com/sveltejs/svelte-preprocess) - A Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, CoffeeScript, TypeScript, Pug and much more.

[autoprefixer](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.

Si googleamos vamos a encontrar que todos los resultados apuntan a utilizar tailwindcss con svelteKit, pero eso no quita que podamos integrarlo sin el kit, nos va a llevar un poco mas de setup manual pero funciona y para single page app no hace falta el kit de svelte.

The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the [Tailwind CLI tool](https://tailwindcss.com/docs/installation) pero tambien lo podemos instalar as a [PostCSS](https://tailwindcss.com/docs/installation/using-postcss) plugin, de echo esta forma es la mas recomendble ya que integrate it with build tools like webpack, Rollup, Vite, and Parcel, por ultimo aca les dejo [guias](https://tailwindcss.com/docs/installation/framework-guides) para integrearlo a los frameworks mas comunes.

## Integracion utilizando unicamente svelte

Creamos el template basico de svelte:

```
npm create vite@latest tailwind_svelte -- --template svelte
cd tailwind_svelte
npm install
```

Instalamos las dependencias e inicializamos los archivos, en este paso se va a crear dos archivos

- tailwind.config.cjs 
- postcss.config.cjs

```
npm install -D tailwindcss postcss postcss-load-config autoprefixer svelte-preprocess
npx tailwindcss init -p
```

y a tailwind.config.cjs lo editamos reemplazando la siguiente linea `content: ['./src/**/*.{html,js,svelte,ts}'],`

Creamos el archivo svelte.config.js y lo guardamos en el root del proyecto con el siguiente codigo:

```
import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
```

Agregamos el siguiente codigo al archivo `/src/app.css` para habilitar el acceso a las clases tailwind desde nuestro codigo

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

todo listo para funcionar

`npm run dev`


## Integracion utilizando svelteKit

Muy [simple](https://tailwindcss.com/docs/guides/sveltekit)

```
npm create svelte@latest svelte_kit
```

- Seleccionamos SvelteKit demo app
- Yes using JavaScript with JsDocs
- Luego todo NO


```
cd svelte_kit
npm install
npm run dev -- --open
```