<script>
  import defaults from '../defaults'
  import { points } from '../stores'
  import StatButton from './StatButton.svelte'

  export let score

  const { minScore, maxScore, scoreCosts } = defaults

  let scoreClasses = ''
  if (score === maxScore) scoreClasses = 'font-bold text-green-100'
  if (score === minScore) scoreClasses = 'italic text-red-200'

  function increaseStat() {
    points.update((n) => n - scoreCosts[score + 1])
    score++
  }

  function decreaseStat() {
    points.update((n) => n + scoreCosts[score])
    score--
  }
</script>

<td class="p-2 md:p-3 flex justify-center items-center gap-4">
  <span class={scoreClasses}>{score}</span>
  <div class="inline-flex flex-col items-start gap-2">
    <div class="whitespace-nowrap">
      <StatButton
        disabled={score === maxScore || scoreCosts[score - 1] > $points}
        on:buttonClick={increaseStat}
      >
        +
      </StatButton>
      <span class={`text-xs ${scoreCosts[score + 1] > $points ? 'text-red-400' : ''}`}>
        {score < maxScore ? `-${scoreCosts[score]}🪙` : ''}
      </span>
    </div>
    <div class="whitespace-nowrap">
      <StatButton disabled={score === minScore} on:buttonClick={decreaseStat}>-</StatButton>
      <span class="text-xs">
        {score > minScore ? `+${scoreCosts[score]}🪙` : ''}
      </span>
    </div>
  </div>
</td>
