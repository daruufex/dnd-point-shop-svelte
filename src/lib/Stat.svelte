<script>
  import { setContext } from 'svelte'
  import { writable, derived } from 'svelte/store'

  import defaults from '../defaults'
  import StatControls from './StatControls.svelte'
  import AncestryBonus from './AncestryBonus.svelte'

  export let name

  const score = writable(10)
  const ancestryBonus = writable(0)
  setContext(`${name}Score`, score)
  setContext(`${name}AncestryBonus`, ancestryBonus)

  const finalScore = derived(
    [score, ancestryBonus],
    ([$score, $ancestryBonus]) => $score + $ancestryBonus
  )
  const modifier = derived(finalScore, ($finalScore) => Math.floor($finalScore - 10 / 2))
</script>

<tr class="border-b border-emerald-700">
  <td class="p-2 md:p-3">{name}</td>
  <StatControls statName={name} />
  <AncestryBonus statName={name} />

  <td class="p-3 text-center">
    {$finalScore} ({$modifier > 0 ? `+${$modifier}` : $modifier})
  </td>
</tr>
