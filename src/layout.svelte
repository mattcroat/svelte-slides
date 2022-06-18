<script context="module" lang="ts">
  import h1 from '$lib/components/mdsvex/h1.svelte'
  export { h1 }
</script>

<slot />

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: 'Inter', sans-serif;
    color: hsl(220 20% 98%);
    background-color: hsl(220 20% 14%);
    overflow: hidden;
  }
</style>
