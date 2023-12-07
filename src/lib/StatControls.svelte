<script>
  import { getContext } from 'svelte'
  import { derived } from 'svelte/store'

  import defaults from '../defaults'
  import { points } from '../stores'
  import StatButton from './StatButton.svelte'

  export let statName

  const { minScore, maxScore, scoreCosts } = defaults

  const score = getContext(`${statName}Score`)

  const scoreClasses = derived(score, ($scores) => {
    if ($scores === maxScore) return 'font-bold text-green-100'
    if ($scores === minScore) return 'italic text-red-200'
    return ''
  })

  function increaseStat() {
    points.update((p) => p - scoreCosts[$score + 1])
    score.update((s) => s + 1)
  }

  function decreaseStat() {
    points.update((p) => p + scoreCosts[$score])
    score.update((s) => s - 1)
  }
</script>

<td class="p-2 md:p-3 flex justify-center items-center gap-4">
  <span class={$scoreClasses}>{$score}</span>
  <div class="inline-flex flex-col items-start gap-2">
    <div class="whitespace-nowrap">
      <StatButton
        disabled={$score === maxScore || scoreCosts[$score - 1] > $points}
        on:buttonClick={increaseStat}
      >
        +
      </StatButton>
      <span class={`text-xs ${scoreCosts[$score + 1] > $points ? 'text-red-400' : ''}`}>
        {$score < maxScore ? `-${scoreCosts[$score]}🪙` : ''}
      </span>
    </div>
    <div class="whitespace-nowrap">
      <StatButton disabled={$score === minScore} on:buttonClick={decreaseStat}>-</StatButton>
      <span class="text-xs">
        {$score > minScore ? `+${scoreCosts[$score]}🪙` : ''}
      </span>
    </div>
  </div>
</td>
