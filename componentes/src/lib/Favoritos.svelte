<script>
    export let my_coin;
</script>

<div class="moneda">
    <div class="titulo">Coin</div>
    <div class="titulo">Precio</div>
    <div class="titulo">Cap.</div>
    <div class="titulo">Vol. 24h</div>
    <div class="titulo">Change 24h</div>
    <div class="titulo">Time</div>

    <div>Bitcoin</div>
    <div>{my_coin["bitcoin"].usd}</div>
    <div>{my_coin["bitcoin"].usd_market_cap}</div>
    <div>{my_coin["bitcoin"].usd_24h_vol}</div>
    <div>{my_coin["bitcoin"].usd_24h_change}</div>
    <div>{my_coin["bitcoin"].last_updated_at}</div>
</div>

<style>
    .moneda {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }

    .titulo {
        font-weight: bold;
    }
</style>
