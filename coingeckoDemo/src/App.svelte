<script>
  //url_coingecko
  const btc_uri =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true";

  const coins_price =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  let contador_clics = 0;
  let coins = [];

  var btc = {
    bitcoin: {
      usd: 0,
      usd_market_cap: 0,
      usd_24h_vol: 0,
      usd_24h_change: 0,
      last_updated_at: 0,
    },
  };

  async function get_data(uri) {
    let res = await fetch(uri, { cache: "no-store" });
    return await res.json();
  }

  function get_btc() {
    contador_clics = contador_clics + 1;
    let resultadoA = get_data(btc_uri).then((data) => {
      console.log(data);
      btc = data;
    });
  }

  function listar_monedas() {
    contador_clics = contador_clics + 1;
    let resultadoA = get_data(coins_price).then((data) => {
      console.log(data);
      coins = data;
    });
  }

  function run_calls() {
    get_btc();
    listar_monedas();
  }

  function limpiar() {
    btc = {
      bitcoin: {
        usd: 0,
        usd_market_cap: 0,
        usd_24h_vol: 0,
        usd_24h_change: 0,
        last_updated_at: 0,
      },
    };
    coins = [];
  }
</script>

<main>
  <div>
    <button on:click={run_calls}>Recargar</button>
    <button on:click={limpiar}>Limpiar</button>
  </div>

  <div class="moneda">
    <div class="titulo">Coin</div>
    <div class="titulo">Precio</div>
    <div class="titulo">Cap.</div>
    <div class="titulo">Vol. 24h</div>
    <div class="titulo">Change 24h</div>
    <div class="titulo">Time</div>
    <div class="titulo">Local</div>

    <div>Bitcoin</div>
    <div>{btc["bitcoin"].usd}</div>
    <div>{btc["bitcoin"].usd_market_cap}</div>
    <div>{btc["bitcoin"].usd_24h_vol}</div>
    <div>{btc["bitcoin"].usd_24h_change}</div>
    <div>{btc["bitcoin"].last_updated_at}</div>
    <div>{contador_clics}</div>
  </div>

  <div>-----------------------------------------</div>

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
    <div class="titulo">Local</div>

    {#each coins as coin}
      <div>{coin.symbol}</div>
      <div>{coin.market_cap_rank.toString()}</div>
      <div>{coin.name}</div>
      <div>{(Math.round(coin.current_price * 100) / 100).toFixed(2)}</div>
      <div>
        {(Math.round(coin.price_change_percentage_24h * 100) / 100).toFixed(2)}
      </div>
      <div>{(Math.round(coin.low_24h * 100) / 100).toFixed(2)}</div>
      <div>{(Math.round(coin.high_24h * 100) / 100).toFixed(2)}</div>
      <div>{coin.total_volume.toString()}</div>
      <div>{coin.market_cap.toString()}</div>
      <div>{contador_clics}</div>
    {/each}
  </div>
</main>

<style>
  .moneda {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .precios {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }

  .titulo {
    font-weight: bold;
  }
</style>
