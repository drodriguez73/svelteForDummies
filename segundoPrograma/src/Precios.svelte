<script>
    //Especie - Open - High - Low - Close - Last - Volume - Vto. - C.cpra. - P.cpra. - P.vta. - C.vta.
    let datos = [
        ['aluar', 185, 189, 183, 0, 186, 14254, '48hs', 10, 185, 186, 2],
        ['byma', 326, 333, 326, 0, 330, 1532, '48hs', 11, 327, 330, 3],
        ['edn', 215, 218, 214, 0, 217, 20023, '48hs', 12, 215, 217, 4]
    ]

    let precios = new Map();
    
    function crear_map_de_datos(precio, indice, arreglo) {
        precios.set(precio[0], precio);
    }
    datos.forEach(crear_map_de_datos);

</script>

<main>
    <div class="precios">
        <div class="titulo">Especie</div>
        <div class="titulo">Vto.</div>
        <div class="titulo">C.cpra.</div>
        <div class="titulo">P.cpra.</div>
        <div class="titulo">P.vta.</div>
        <div class="titulo">C.vta.</div>
        <div class="titulo">Apertura</div>
        <div class="titulo">Minimo</div>
        <div class="titulo">Maximo</div>
        <div class="titulo">Ultimo</div>

        {#each [...precios.keys()] as key}
            <div>{precios.get(key)[0]}</div>
            <div>{precios.get(key)[7]}</div>
            <div>{precios.get(key)[8]}</div>
            <div>{precios.get(key)[9]}</div>
            <div>{precios.get(key)[10]}</div>
            <div>{precios.get(key)[11]}</div>
            <div>{precios.get(key)[1]}</div>
            <div>{precios.get(key)[3]}</div>
            <div>{precios.get(key)[2]}</div>
            <div>{precios.get(key)[10]}</div>
        {/each}

    </div>

</main>

<style>
.precios {
	display: grid;
    grid-template-columns: repeat(10, 1fr);
}

.precios > div {
	margin: 2px;
	padding: 5px;
	background: palegreen;
}

.precios > div:nth-child(10n+2) {
	background: lemonchiffon;
}

.precios > div:nth-child(10n+3) {
	background: palegreen;
}

.precios > div:nth-child(10n+4) {
	background: lemonchiffon;
}

.precios > div:nth-child(10n+5) {
	background: palegreen;
}

.precios > div:nth-child(10n+6) {
	background: lemonchiffon;
}

.precios > div:nth-child(10n+7) {
	background: palegreen;
}

.precios > div:nth-child(10n+8) {
	background: lemonchiffon;
}

.precios > div:nth-child(10n+9) {
	background: palegreen;
}

.precios > div:nth-child(10n+10) {
	background: lemonchiffon;
}

.titulo {
	font-weight: bold;
}
</style>

