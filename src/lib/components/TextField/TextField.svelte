<script lang="ts">
	import TextFieldFill from './assets/TextFieldFill.svelte';
	import TextFieldOutline from './assets/TextFieldOutline.svelte';
	import TextFieldStandard from './assets/TextFieldStandard.svelte';

	export let variant: 'outline' | 'standard' | 'fill' | undefined | null = 'outline';
	export let id: string | null | undefined = Math.random().toString(32).substring(2);
	export let value: string | number | undefined | null = '';
	export let type:
		| 'text'
		| 'number'
		| 'tel'
		| 'email'
		| 'url'
		| 'password'
		| 'search'
		| null
		| undefined = 'text';
	export let label: string;

</script>

{#if variant === 'outline'}
	<TextFieldOutline {id} {type} {label} {value} />
{:else if variant === 'standard'}
	<TextFieldStandard {id} {type} {label} {value} />
{:else if variant === 'fill'}
	<TextFieldFill {id} {type} {label} {value} />
{:else}
	<TextFieldOutline {id} {type} {label} {value} />
{/if}
