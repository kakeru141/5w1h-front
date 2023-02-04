<script lang="ts">
	export let id: string | null | undefined;
	export let value: string | number | undefined | null = '';
	export let type: 'text' | 'number' | 'tel' | 'email' | 'url' | 'password' | 'search' | null | undefined = 'text'
	export let onChange: (e: Event & {
		currentTarget: EventTarget & HTMLInputElement;
	}) => void
</script>

<!-- <input {type} {id} placeholder=" " on:change={onChange} {value} /> -->
<input {type} {id} placeholder=" " on:input={onChange} {value} />

<style lang="scss">
	input {
		border: none;
		outline: none;
		height: 1.4em;
		width: 100%;
	}
</style>
