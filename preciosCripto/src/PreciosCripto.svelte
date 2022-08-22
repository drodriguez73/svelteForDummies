<script>

  let coins = [];
  let headings = ["#", "Coin", "Price", "Price Change", "24h Volume"];
  let textSearch = "";
  let filteredCoins = [];

  const loadCoins = async () => {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    const res = await fetch(url);
    const data = await res.json();
    coins = data;
    filteredCoins = data;
  };
  loadCoins();


</script>

<main>
    <div>
        <h1>Resultado de loadCoins</h1>
        <br>
        {coins}
    </div>

</main>

<style>

</style>