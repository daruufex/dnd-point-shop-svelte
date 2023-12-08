<script>
  import { getContext } from 'svelte'

  export let ancestryBonus

  function handleInput(newValue) {
    if (isNaN(Number(newValue))) {
      ancestryBonus = 0
      return
    }
    if (newValue.length > 1) {
      ancestryBonus = newValue.slice(0, 1)
      return
    }
    ancestryBonus = newValue
  }
</script>

<td class="p-3 text-center">
  +&nbsp;
  <input
    class="bg-amber-950 p-2 rounded w-10 text-center"
    type="text"
    bind:value={ancestryBonus}
    on:input={(e) => handleInput(e.target.value)}
    on:focusout={(e) => {
      if (e.target.value === '') ancestryBonus = 0
    }}
  />
</td>
