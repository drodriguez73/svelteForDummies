<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div class="container flex-auto bg-emerald-500 px-2 py-2">
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} alt="Svelte Logo" />
      </a>
    </div>

    <h1>Vite + Svelte</h1>

    <div>
      <Counter />
    </div>

    <div>Click on the Vite and Svelte logos to learn more</div>
  </div>
</main>

<style>
</style>
