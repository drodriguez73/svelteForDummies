<script>
  import C_cuenta from "./lib/C_cuenta.svelte"
  const cuentas = {}

  const operaciones = [
    {
      hora: "11:01",
      cuenta: "25",
      simbolo: "AL30",
      cantidad: 12,
      precio: 25.57,
    },
    {
      hora: "11:05",
      cuenta: "27",
      simbolo: "GGAL",
      cantidad: 21,
      precio: 301.56,
    },
    {
      hora: "11:06",
      cuenta: "29",
      simbolo: "COME",
      cantidad: 7,
      precio: 87.26,
    },
    {
      hora: "11:07",
      cuenta: "25",
      simbolo: "GD30",
      cantidad: 26,
      precio: 65.12,
    },
  ];

  operaciones.forEach(operacion => {

    if (operacion.cuenta in cuentas) {
      cuentas[operacion.cuenta].push(operacion)
    } else {
      cuentas[operacion.cuenta] = [operacion]
    }

  })


</script>

<main>

  <div>

    <C_cuenta cuentas={cuentas}/>

  </div>


</main>

<style>
</style>
