<script lang="ts">
  import { currentSlide } from '$lib/stores/slides'

  export let slideIndex: number

  $: show = slideIndex === $currentSlide
  $: left = slideIndex < $currentSlide
  $: right = slideIndex > $currentSlide
</script>

<div class="slide" class:show class:left class:right>
  <slot />
</div>

<style>
  .slide {
    height: 100vh;
    width: 100vw;
    display: grid;
    place-content: center;
    gap: 2rem;
    font-size: 4vw;
    text-align: center;
    opacity: 0;
    transition: transform 1s, opacity 1s;
  }

  .show {
    opacity: 1;
    transform: translate(0%);
  }

  .left {
    opacity: 0;
    transform: rotate(-45deg) translate(-100%, 25%);
    filter: blur(4px);
  }

  .right {
    opacity: 0;
    transform: rotate(45deg) translate(100%, 25%);
    filter: blur(4px);
  }
</style>
