<script>
    export let cuentas;
    
    const key_cuetnas = Object.keys(cuentas);


</script>

<main>

    {#each key_cuetnas as k}
        <div class="rounded-lg bg-gray-200 p-4">
            <div>Comitente: {k}</div>
            <div>Total operaciones: {cuentas[k].length} Ultima: {cuentas[k][0].hora}</div>
        </div>
    {/each}
</main>

<style>
</style>
