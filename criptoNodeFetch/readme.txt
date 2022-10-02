# Cliente en Node - Precios Cripto desde CoinGecko

## Requerimientos

Instalamos las siguientes dependecias

```
npm i node-fetch
```

## Run

`node coingecko.js`


## Utilizamos fetch con async para traer precios

https://dmitripavlutin.com/javascript-fetch-async-await/


## CoinGecko API

Como utilizar la api para recuperar precios cripto:

Este es el [request](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false) para traer los precios.


y tenemos por resultado un array de elementos [coin1, coin2, coinN) donde cada elemento coin tiene la siguente estructura:

```
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 21259,
    market_cap: 406694531822,
    market_cap_rank: 1,
    fully_diluted_valuation: 446059704305,
    total_volume: 36787523405,
    high_24h: 21642,
    low_24h: 21088,
    price_change_24h: 170.85,
    price_change_percentage_24h: 0.81018,
    market_cap_change_24h: 2982020409,
    market_cap_change_percentage_24h: 0.73865,
    circulating_supply: 19146731,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -69.23599,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 31224.65941,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2022-09-10T15:11:37.395Z'
  }
```




### Const vs let vs var

https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/

