<script>
  import Precios from "./lib/Precios.svelte";
  import Favoritos from "./lib/Favoritos.svelte";
  import PrimerFormulario from "./lib/PrimerFormulario.svelte";


  //url_coingecko
  const btc_uri =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true";

  const coins_price =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  let coins = [];

  let btc = {
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

  function leerPrecios() {
    let monedas = get_data(coins_price).then((data) => {
      coins = data;
    });
    let moneda = get_data(btc_uri).then((data) => {
      btc = data;
    });
  }

</script>

<main>
  <h1>Componentes</h1>

  <div>
    <h1>Programando nuestro primer formulario</h1>
    <PrimerFormulario/>

  </div>

  <div>
    <h1>Precio de bitcoin - Coingecko</h1>
    <Favoritos my_coin={btc} />
  </div>

  <div>
    <h1>Precios cripto monedas - Coingecko</h1>
    <Precios my_coins={coins} on:leerPrecios={leerPrecios} />
  </div>


</main>

