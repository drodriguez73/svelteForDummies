import './assets/app.css'
import Izquierda from './Izquierda.svelte'
import Centro from './Centro.svelte'
import Derecha from './Derecha.svelte'

const izquierda = new Izquierda({
  target: document.getElementById('izquierda'),
  props: {
    prop_externo: "Hola Mundo A"
  }
})

const centro = new Centro({
  target: document.getElementById('centro')
})

const derecha = new Derecha({
  target: document.getElementById('derecha'),
  props: {
    prop_externo: "Hola Mundo C"
  }

})

//export default centro, ni idea que es lo que hace, ya que si la quito todo funciona igual.





