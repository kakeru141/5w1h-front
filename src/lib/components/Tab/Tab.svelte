<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Primary from './assets/Primary.svelte';
	import Secondary from './assets/Secondary.svelte';

	export let tabs: { text: string; icon?: ComponentType; content?: ComponentType }[] = [
		{ text: 'text' }
	];
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

{#if variant === 'primary'}
	<Primary {tabs} />
{:else if variant === 'secondary'}
	<Secondary {tabs} />
{/if}
