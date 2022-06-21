<script context="module">
  import h1 from '$lib/components/mdsvex/h1.svelte'
  export { h1 }

  import './styles/global.css'
</script>

<script lang="ts">
  import { currentSlide } from '$lib/stores/slides'

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
