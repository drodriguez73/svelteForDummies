<script>
    import { onMount } from "svelte";

    const exampleSocket = new WebSocket("ws://localhost:8001/");

    let message;
    let messages = [];
    let msg_historico = [];

    exampleSocket.onmessage = (event) => {
        message = event.data;
        msg_historico.push(message);
        messages = msg_historico
        
    };
</script>

<main>
    <table class="table-auto border">
        <thead>
            <tr>
                <th>Mensaje</th>
            </tr>
        </thead>

        <tbody>
            {#each messages as msg}
                <tr>
                    <td>{msg}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>

<style>
</style>
