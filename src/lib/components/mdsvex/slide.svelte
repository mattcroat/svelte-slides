<script lang="ts">
  import { currentSlide, slideDirection } from '$lib/stores/slides'

  export let slideIndex: number

  $: show = slideIndex === $currentSlide

  $: enteringRight = show && $slideDirection === 'right'
  $: enteringLeft = show && $slideDirection === 'left'

  // entering and leaving state
</script>

<div class="slide" class:show class:enteringRight class:enteringLeft>
  <slot />
</div>

<style>
  .slide {
    height: 100vh;
    width: 100vw;
    display: none;
    font-size: 2vw;
    text-align: center;
  }

  .show {
    display: grid;
    place-content: center;
    gap: 2rem;
  }

  .enteringRight {
    animation: 0.4s enteringRight;
  }

  .enteringLeft {
    animation: 0.4s enteringLeft;
  }

  @keyframes enteringRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes enteringLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
</style>
