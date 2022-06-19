<script context="module" lang="ts">
  import h1 from '$lib/components/mdsvex/h1.svelte'
  export { h1 }
</script>

<script lang="ts">
  import { currentSlide } from '$lib/stores/slides'

  function handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        $currentSlide += 1
        break
      case 'ArrowLeft':
        if ($currentSlide > 1) $currentSlide -= 1
        break
    }
  }
</script>

<svelte:head>
  <title>Svelte Slides</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

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
