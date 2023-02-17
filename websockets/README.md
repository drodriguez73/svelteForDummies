# Ejemplo super bascio

para correr el ejemplo en primer lugar tenemos que correr el server: `python app.py`, luego podemos ejecutar el cliente que trae la misma libreria de websocket o un cliente web.

Es importante entender que para que un cliente funcione primero debe estar corriendo el servidor que no va a hacer otra cosa que escuchar por http en el puerto q este programado. Recien al momento de correr el cliente y que este se conecte obiamente al mismo puerto se inicia el handshake y la coneccion queda valida entre ambos endpoints.

Asi de simple ejecutamos el cliente propio de la libreria `python -m websockets ws://localhost:8001/` e inmediatamente vamos a ver como el servidor le comienza a mandar msg. El mismo cliente tambien pudede enviar msg, ya dijimos que el canal es full duplex. 

Tambien tenemos un cliente web que va justo para este ejemplo, en la carpeta svelteForDummies esta websockets, obiamente desarrollado con node.js, svelte y tailwind. El cliente no es tan potente como el propio de la libreria pero la intencion es mostrar que cualquier navegador tiene soporte para websockets.

Entramos en esa carpeta, corremos el servidor 

```
npm install
npm run dev
```

abrimos un navegador y apuntamos a http:\\localhost:5173

