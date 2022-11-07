<script>
    
    function procesarSubmit(e) {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        console.log(data);
    }
</script>

<main>
    <form on:submit|preventDefault={procesarSubmit}>
        <div>
            <label for="cantidad">Cantidad</label>
            <input
                type="number"
                id="cantidad"
                name="cantidad"
                min="1"
                step="any"
                value="1.00"
            />
        </div>
        <div>
            <label for="precio">Precio</label>
            <input
                type="number"
                id="precio"
                name="precio"
                min="1"
                step="any"
                value="1.00"
            />
        </div>
        <div>
            Plazo
            <fieldset>
                <label for="opt_ci">CI</label>
                <input type="radio" id="ci" name="plazo" value="CI" />
                <label for="opt_48">48Hs</label>
                <input
                    type="radio"
                    id="48"
                    name="plazo"
                    value="48"
                    checked
                />
            </fieldset>
        </div>
        <div>
            Operacion
            <fieldset>
            <div>
                <label for="buy">Compra</label>
                <input type="radio" id="buy" name="side" value="compra" checked />
                <label for="sell">Venta</label>
                <input type="radio" id="sell" name="side" value="venta" />
            </div>
        </fieldset>

        </div>
        <button type="submit">Enviar Orden</button>
    </form>
</main>

<style>
    * {
        box-sizing: border-box;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    form > div {
        display: flex;
        justify-content: space-between;
    }

    form > div + * {
        margin-top: 10px;
    }
</style>
