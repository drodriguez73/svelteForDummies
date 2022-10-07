<script>
    export let my_coins;
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    function getCoingeckoData() {
        dispatch("leerPrecios");
    }
</script>

<div>
    <button on:click={getCoingeckoData}>Precios</button>
</div>

<div class="precios">
    <div class="titulo">Coin</div>
    <div class="titulo">#</div>
    <div class="titulo">Nombre</div>
    <div class="titulo">Precio</div>
    <div class="titulo">24h %</div>
    <div class="titulo">Min. 24h</div>
    <div class="titulo">Max. 24h</div>
    <div class="titulo">Vol. 24h</div>
    <div class="titulo">Cap.</div>

    {#each my_coins as coin}
        <div>{coin.symbol}</div>
        <div>{coin.market_cap_rank.toString()}</div>
        <div>{coin.name}</div>
        <div>{(Math.round(coin.current_price * 100) / 100).toFixed(2)}</div>
        <div>
            {(Math.round(coin.price_change_percentage_24h * 100) / 100).toFixed(
                2
            )}
        </div>
        <div>{(Math.round(coin.low_24h * 100) / 100).toFixed(2)}</div>
        <div>{(Math.round(coin.high_24h * 100) / 100).toFixed(2)}</div>
        <div>{coin.total_volume.toString()}</div>
        <div>{coin.market_cap.toString()}</div>
    {/each}
</div>

<style>
    .precios {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
    }

    .titulo {
        font-weight: bold;
    }
</style>
