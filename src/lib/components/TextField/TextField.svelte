<script lang="ts">
	import TextFieldOutline from './assets/TextFieldOutline.svelte';
	import TextFieldStandard from './assets/TextFieldStandard.svelte';

	export let variant: 'outline' | 'standard' | undefined | null = 'standard';
	export let id: string | null | undefined = Math.random().toString(32).substring(2);
	export let type: 'text' | 'number' | 'tel' | 'email' | 'url' | 'password' | 'search' | null | undefined = 'text'
	export let value: string | number | undefined | null = '';
	export let label: string;
	// export let onChange: (e: Event & {
    //     currentTarget: EventTarget & HTMLInputElement;
    // }) => void
    $:onChange = (e: Event & {
        currentTarget: EventTarget & HTMLInputElement;
    }) => {
        value = e.currentTarget.value
    }
</script>

{#if variant === 'outline'}
	<TextFieldOutline {id} {type} {label} {onChange} {value}/>
{:else if variant === 'standard'}
	<TextFieldStandard {id} {type} {label} {onChange} {value}/>
{/if}

