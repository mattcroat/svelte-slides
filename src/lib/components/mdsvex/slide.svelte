<script lang="ts">
  import { currentSlide } from '$lib/stores/slides'

  export let slideIndex: number

  $: show = slideIndex === $currentSlide
</script>

<div class="slide" class:show>
  <slot />
</div>

<style>
  .slide {
    height: 100vh;
    width: 100vw;
    display: none;
    font-size: 4vw;
    text-align: center;
  }

  .show {
    display: grid;
    place-content: center;
    gap: 2rem;
  }

  .slideFromRight {
    animation: 0.4s slide;
  }

  .slideFromLeft {
    animation: 0.4 slide reverse;
  }

  @keyframes slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
</style>
