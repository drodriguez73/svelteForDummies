import PreciosCripto from './PreciosCripto.svelte'

const precios_cripto = new PreciosCripto(
    {
        target: document.getElementById('precios')
    }
)

export default precios_cripto