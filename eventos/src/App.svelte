<script>

  var alu_1 = {
    nombre: "Alu_1",
    apellido: "Alu_1 ape",
    edad: 8
  };

  var alu_2 = {
    nombre: "Alu_2",
    apellido: "Alu_2 ape",
    edad: 9
  };
  
  var alu_3 = {
    nombre: "Alu_3",
    apellido: "Alu_3 ape",
    edad: 10
  };

  var alumnos = [alu_1, alu_2, alu_3];

  var fnombre = ""
  var fapellido = ""
  var fedad = 0

  function filtrarAlumno(e) {

    let n = e.target.value;

    alumnos.forEach(a => {
      if (n.toUpperCase() == a.nombre.toUpperCase()) {
        fnombre = a.nombre;
        fapellido = a.apellido;
        fedad = a.edad;
      }
    });
  }
  
</script>

<main>

  <div>
    <ul>
      <li>
        <div>Nombre | Apellido | Edad</div>
    </li>

    {#each alumnos as a}
       <li>
        <div>{a.nombre} | {a.apellido} | {a.edad}</div>
       </li>

    {/each}
  </ul>
  </div>

  <div>
    <label for="filtro">Filtro</label>
    <input type="text" id="filtro" name="filtro" on:keyup="{filtrarAlumno}">
  </div>

  <div>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" placeholder="{fnombre}">
    <label for="apellido">Apellido</label>
    <input type="text" id="apellido" name="apellido" placeholder="{fapellido}">
    <label for="edad">Edad</label>
    <input type="text" id="edad" name="edad" placeholder="{fedad}">
  </div>


</main>

<style>
</style>
