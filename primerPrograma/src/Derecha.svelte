<script>
  export let prop_externo
  let espacio_div ="Estamos a la derecha"
</script>

<main>
  <div class="derecha">
    <h1>{prop_externo}</h1>
    <h2>{espacio_div}</h2>
  </div>
  
</main>

<style>
  .derecha {
    background-color: green;
  }
</style>
