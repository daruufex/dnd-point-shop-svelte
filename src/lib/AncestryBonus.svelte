<script>
  import { getContext } from 'svelte'

  export let statName
  const ancestryBonus = getContext(`${statName}AncestryBonus`)

  function handleInput(newValue) {
    if (isNaN(newValue) || newValue > 9) {
      ancestryBonus.set(0)
      return
    }
    ancestryBonus.set(newValue)
  }
</script>

<td class="p-3 text-center">
  +&nbsp;
  <input
    class="bg-emerald-950 p-2 rounded w-10 text-center"
    type="text"
    value={$ancestryBonus}
    on:input={(e) => handleInput(Number(e.target.value))}
  />
</td>
