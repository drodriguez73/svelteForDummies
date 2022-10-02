<script>
</script>

<main>
    <div class="orden">
        <fieldset>

            <div class="especie">
                <label for="especie">Especie</label>
                <input type="text" id="especie" name="especie">
            </div>

            <div class="especie_detalle">
                <div class="tabla">
                    <div class="titulo">Plazo</div>
                    <div class="titulo">Ult. operado</div>
                    <div class="titulo">Compra</div>
                    <div class="titulo">Venta</div>

                    <div>CI</div>
                    <div>145</div>
                    <div>141</div>
                    <div>148</div>

                    <div>24</div>
                    <div>145</div>
                    <div>141</div>
                    <div>148</div>

                    <div>48</div>
                    <div>145</div>
                    <div>141</div>
                    <div>148</div>

                </div>
            </div>
        </fieldset>

        <fieldset>
            <div class="cantidad">
                <label for="cantidad">Cantidad</label>
                <input type="text" id="cantidad" name="cantidad">
                <label for="precio">Precio</label>
                <input type="text" id="precio" name="precio">

            </div>
			</fieldset>
			
			<fieldset>			
            <div class="plazo">
                <label for="opt_ci">CI</label>
                <input type="radio" id="opt_ci" name="plazo" value="ci" checked>
                <label for="opt_24">24Hs</label>
                <input type="radio" id="opt_24" name="plazo" value="24">
                <label for="opt_48">48Hs</label>
                <input type="radio" id="opt_48" name="plazo" value="48">
            </div>
			</fieldset>
			
			<fieldset>
            <div class="operacion">
                <label for="opt_compra">Compra</label>
                <input type="radio" id="opt_compra" name="side" value="compra" checked>
                <label for="opt_venta">Venta</label>
                <input type="radio" id="opt_venta" name="side" value="venta">
            </div>
        </fieldset>
    </div>

</main>

<style>

.orden {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
  .especie {
      grid-row-start: 1;
      grid-column-start: 1;
      
      grid-row-end: 2;
      grid-column-end: 1;
  }
  .especie_detalle {
      grid-row-start: 2;
      grid-column-start: 1;
      
      grid-row-end: 3;
      grid-column-end: 1;
  }
  
  .tabla {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
  }
  .tabla > div {
    margin: 2px;
    background: powderblue;
    padding: 5px;
  }
  .titulo {
      font-weight: bold;
  }
  
  .cantidad {
      grid-row-start: 3;
      grid-column-start: 1;
      
      grid-row-end: 4;
      grid-column-end: 1;
  }
  
  .plazo {
      grid-row-start: 4;
      grid-column-start: 1;
      
      grid-row-end: 5;
      grid-column-end: 1;
  }
  
  .operacion {
      grid-row-start: 5;
      grid-column-start: 1;
      
      grid-row-end: 6;
      grid-column-end: 1;
  }
  
</style>

