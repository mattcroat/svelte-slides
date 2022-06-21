<script context="module" lang="ts">
  import h1 from '$lib/components/mdsvex/h1.svelte'
  export { h1 }

  import './styles/global.css'
</script>

<script lang="ts">
  import { currentSlide } from '$lib/stores/slides'

  // for some reason this being typed causes an error by the preprocessor
  // is it because it's not processing TypeScript?
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

<slot />
