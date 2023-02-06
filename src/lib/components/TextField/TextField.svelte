<script lang="ts">
	import Fill from './assets/Fill.svelte';
	import Outline from './assets/Outline.svelte';
	import Standard from './assets/Standard.svelte';

	export let variant: 'outline' | 'standard' | 'fill' = 'outline';
	export let id: string | undefined = Math.random().toString(32).substring(2);
	export let value: string | number | undefined = '';
	export let type: 'text' | 'number' | 'tel' | 'email' | 'url' | 'password' | 'search' | undefined =
		'text';
	export let label: string;
</script>

{#if variant === 'outline'}
	<Outline {id} {type} {label} {value} />
{:else if variant === 'standard'}
	<Standard {id} {type} {label} {value} />
{:else if variant === 'fill'}
	<Fill {id} {type} {label} {value} />
{:else}
	<Outline {id} {type} {label} {value} />
{/if}
