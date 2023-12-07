<script>
  import { createEventDispatcher } from 'svelte'

  export let disabled
  const dispatch = createEventDispatcher()

  const classes =
    'w-7 mr-1 border rounded border-emerald-700 ' +
    'hover:bg-emerald-700 active:bg-emerald-950 transition-colors ' +
    'disabled:bg-emerald-950 disabled:text-gray-500'
</script>

<button class={classes} {disabled} on:click={() => dispatch('buttonClick')}>
  <slot />
</button>
