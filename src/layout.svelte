<script context="module">
  import h1 from '$lib/components/mdsvex/h1.svelte'
  export { h1 }

  import './styles/global.css'
  import './styles/syntax.css'
</script>

<script>
  import { currentSlide } from '$lib/stores/slides'

  // mdsvex doesn't support TypeScript yet
  // https://github.com/pngwn/MDsveX/issues/116
  // @ts-ignore
  function handleKeydown(event) {
    switch (event.key) {
      case 'ArrowRight':
        $currentSlide += 1
        break
      case 'ArrowLeft':
        if ($currentSlide > 1) {
          $currentSlide -= 1
        }
        break
    }
  }
</script>

<svelte:head>
  <title>Svelte Slides</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="slides">
  <slot />
</div>

<style>
  .slides {
    height: 100vh;
    width: 100vw;
    display: grid;
  }

  .slides > :global(*) {
    grid-area: 1 / 1;
  }
</style>
