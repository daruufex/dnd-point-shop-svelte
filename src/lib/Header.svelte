<script>
  import defaults from '../defaults'
  import { points } from '../stores'

  const { maxPoints } = defaults
</script>

<h1 class="text-3xl">💰 D&D Point Shop (Svelte)</h1>
<p class="p-2">🪙 Current points: {$points}/{maxPoints}</p>
