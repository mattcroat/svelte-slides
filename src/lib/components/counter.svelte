<script>
  let count = 0
</script>

<div class="counter">
  <button on:click={() => (count -= 1)}>-</button>
  <span>{count}</span>
  <button on:click={() => (count += 1)}>+</button>
</div>

<style>
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  button {
    padding: 0.6rem 1rem;
    font-weight: 700;
    border: none;
    border-radius: 20px;
  }
</style>
