<script>
  import { createEventDispatcher } from 'svelte'

  export let disabled
  const dispatch = createEventDispatcher()

  const classes =
    'w-7 mr-1 border rounded border-amber-700 ' +
    'hover:bg-amber-700 active:bg-amber-950 transition-colors ' +
    'disabled:bg-amber-950 disabled:text-gray-500'
</script>

<button class={classes} {disabled} on:click={() => dispatch('buttonClick')}>
  <slot />
</button>
