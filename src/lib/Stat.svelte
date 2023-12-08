<script>
  import StatControls from './StatControls.svelte'
  import AncestryBonus from './AncestryBonus.svelte'

  export let name

  let score = 10
  let ancestryBonus = 0

  $: finalScore = score + (ancestryBonus === '' ? 0 : Number(ancestryBonus))
  $: modifier = Math.floor((finalScore - 10) / 2)
</script>

<tr class="border-b border-amber-700">
  <td class="p-2 md:p-3">{name}</td>

  <StatControls bind:score />
  <AncestryBonus bind:ancestryBonus />

  <td class="p-3 text-center">
    {finalScore} ({modifier > 0 ? `+${modifier}` : modifier})
  </td>
</tr>
