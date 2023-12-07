<script>
  import Stat from './Stat.svelte'

  const statNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
</script>

<table class="w-full text-md md:text-xl">
  <thead>
    <tr class="border-b-2 border-b-emerald-700">
      <th class="p-2 md:p-3 text-left">Attribute</th>
      <th class="p-2 md:p-3 text-center">Ability score</th>
      <th class="p-2 md:p-3 text-center">Ancestry bonus</th>
      <th class="p-2 md:p-3 text-center">Final score</th>
    </tr>
  </thead>

  <tbody>
    {#each statNames as name (name)}
      <Stat {name} />
    {/each}
  </tbody>
</table>
