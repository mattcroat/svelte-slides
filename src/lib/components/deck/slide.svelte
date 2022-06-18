<script lang="ts">
  export let slideIndex: number

  const currentSlideIndex = 1
  const show = slideIndex === currentSlideIndex
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
</style>
