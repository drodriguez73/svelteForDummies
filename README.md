# Learning Javascrtip & Svelte

## What is Svelte?

[Svelte](https://svelte.dev/) es un framework [reactivo](https://jonmircha.com/reactividad-javascript) a los datos y con un lenguaje [declarativo](https://styde.net/programacion-declarativa-vs-imperativa/) for building fast web applications.


It is similar to JavaScript frameworks such as React, Angular, Vue, which share a goal of making it easy to build slick interactive user interfaces. But there's a crucial difference: Svelte converts your app into ideal JavaScript at build time, rather than interpreting your application code at run time.

## Si es igual q Vue y React, por que elegi a Svelte?

Soy nuevo en javascript y realmente se muy poco, claramente arranque con React, Angular y tambien Vue pero me resulto complicado y la curva de apredizaje me termino derrorando. Googleando llegue a svelte y me resulto super facil ya que no me obligo a saber de javascript. Svelte tiene muchisimos componentes listos para utilizar, copiar y pergar y de lenguage muy natural y facil de entender, que luego al momento de compilar se va a generar el codigo javascript totalmente transparente para nosotros.

Esto a su vez trae otras ventajas segun cuentas sus evngelizadores:

- You don't pay the performance cost of the framework's abstractions, and you don't incur a penalty when your app first loads.


## Guia con mis primeros pasos.

Mi principal fuente de aprendizaje de svlete es el siguiente canal de youtube del señor [Makigas](https://www.youtube.com/c/makigas)

Es de ahi donde arranque a ver cada uno de sus videos sobre svelte y tomar apuntes organizados en distintos ejemplos.

1. Arranquen con mi primerPrograma y segundoPrograma para hacer los primeros pasos. 
2. Sigan con criptoNodeFetch que es javascript puero mas resultados por consola, sin nada de svelte pero que les va a reultar practico para entender la api de coingecko, luego sigan con coingeckoDemo donde van consumir una api y mostrar los resultados ahora si con svelte.
3. Componentes en svelte
4. tailwind

## Vite

Svelte se integra muy bien con [vite](https://vitejs.dev/guide/) ofreciendonos en primer lugar un dev server local para correr nuestra app haciendo el desarrolo muy sencillo de testear. Ademas una poderosa herramienta para hacer el build de nuesta app, tanto para el dev server como para produccion

You don't need to set up the Server Side Rendering (SSR Dev server) because svelte-hmr already does the magic under the hood. Simple, corra el siguiente comando y su app va a estar funcionando `npm run dev`. Al momento de ir a [produccion](https://vitejs.dev/guide/build.html) simplemente corra `npm run build` command y lleve el build a su servidor estatico.




