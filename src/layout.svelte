<script context="module" lang="ts">
  import h1 from '$lib/components/mdsvex/h1.svelte'
  export { h1 }
</script>

<slot />

<style>
  :global(body) {
    font-family: sans-serif;
    color: white;
    background-color: black;
  }
</style>
