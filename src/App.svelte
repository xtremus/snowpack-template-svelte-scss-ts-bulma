<script lang="typescript">
  import { onMount } from "svelte";

  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  export let name:string;
</script>

<style lang="scss">
  $primary-color: white;
  $bg: black;
  h1 {
    color: $primary-color;
    background-color: $bg;
  }
</style>

<h1>Hello {name}!</h1>
<h1>{count}</h1>
