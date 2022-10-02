const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url_coingecko = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";


async function get_data(uri) {
    let res = await fetch(uri);
    return await res.json();

}


function print_md_header() {
    let simbolo = 'Coin'.padEnd(6);
    let rank = '#'.padEnd(3)
    let nombre = 'Nombre'.padEnd(20);
    let precio = 'Precio'.padEnd(10);
    let var_24 = '24h %'.padEnd(6);
    let min_24 = 'Min 24h'.padEnd(10);
    let max_24 = 'Max 24h'.padEnd(10);
    let vol_24 = 'Vol 24h'.padEnd(15);
    let m_cap = 'Cap'.padEnd(15);
    
    console.log('%s |%s |%s |%s |%s |%s |%s |%s |%s |', 
    simbolo,
    rank,
    nombre,
    precio,
    var_24,
    min_24,
    max_24,
    vol_24,
    m_cap
    );

}

function print_md_body(data) {

    let ordenado = data

    ordenado.forEach(coin => {

        let simbolo = coin.symbol;
        if (filtro_coin == simbolo || filtro_coin == 'todos') {

            let nombre = coin.name;
            let precio = (Math.round(coin.current_price * 100) / 100).toFixed(2);
            let var_24 = (Math.round(coin.price_change_percentage_24h * 100) / 100).toFixed(2);
            let min_24 = (Math.round(coin.low_24h * 100) / 100).toFixed(2);
            let max_24 = (Math.round(coin.high_24h * 100) / 100).toFixed(2);
            let vol_24 = coin.total_volume.toString();
            let m_cap = coin.market_cap.toString();
            let rank = coin.market_cap_rank.toString();
    
            nombre = nombre.padEnd(20);
            simbolo = simbolo.padEnd(6);
            precio = precio.padEnd(10);
            var_24 = var_24.padEnd(6);
            min_24 = min_24.padEnd(10);
            max_24 = max_24.padEnd(10);
            vol_24 = vol_24.padEnd(15);
            m_cap = m_cap.padEnd(15);
            rank = rank.padEnd(3);
            
            console.log('%s |%s |%s |%s |%s |%s |%s |%s |%s |', 
            simbolo,
            rank,
            nombre,
            precio,
            var_24,
            min_24,
            max_24,
            vol_24,
            m_cap
            );
        }
    });
}




function listar_monedas() {
    let resultadoA = get_data(url_coingecko).then(
        data => {
            console.log("Precios Cripto desde Coingecko");
            console.log("------------------------------")
            console.log()
            //console.log(data);
            print_md_header();
            print_md_body(data);
    
        }
    )    
}


const customIndex = process.argv.indexOf('-e');
let coin;
if (customIndex > -1) {
    coin = process.argv[customIndex + 1];
}
const filtro_coin = (coin || 'todos');

listar_monedas()

