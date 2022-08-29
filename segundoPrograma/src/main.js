import './misordenes.css'
import Misordenes from './Misordenes.svelte'

import './precios.css'
import Precios from './Precios.svelte'

import './orden.css'
import Orden from './orden.svelte'

const misordenes = new Misordenes({
  target: document.getElementById('mis_ordenes')
})

const precios = new Precios({
  target: document.getElementById('precios')
})

const orden = new Orden({
  target: document.getElementById('nueva_orden')
})
