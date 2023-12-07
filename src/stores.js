import { writable } from 'svelte/store'
import defaults from './defaults'

export const points = writable(defaults.startingPoints)
