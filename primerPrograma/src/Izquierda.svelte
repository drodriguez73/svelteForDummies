<script>
  export let prop_externo
  let espacio_div ="Estamos a la izquierda"
</script>

<main>
  <div class="izquierda">
    <h1>{prop_externo}</h1>
    <h2>{espacio_div}</h2>
  </div>

</main>

<style>
  .izquierda {
    background-color: blue;
  }
</style>
