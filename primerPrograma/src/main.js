import './assets/app.css'
import Izquierda from './Izquierda.svelte'
import Centro from './Centro.svelte'
import Derecha from './Derecha.svelte'

const izquierda = new Izquierda({
  target: document.getElementById('izquierda')
})

const centro = new Centro({
  target: document.getElementById('centro')
})

const derecha = new Derecha({
  target: document.getElementById('derecha')
})


export default centro


