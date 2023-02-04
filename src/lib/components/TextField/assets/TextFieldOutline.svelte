<script lang="ts">
	import Input from './Input.svelte';

	export let id: string | null | undefined = Math.random().toString(32).substring(2);
	export let value: string | number | undefined | null = '';
	export let type: 'text' | 'number' | 'tel' | 'email' | 'url' | 'password' | 'search' | null | undefined = 'text'
	export let label: string;
	export let onChange: (e: Event & {
		currentTarget: EventTarget & HTMLInputElement;
	}) => void
</script>

<div class="text-field-outline">
	<label for={id}>{label}</label>
	<Input {id} {type} {onChange} {value} />
</div>

<style lang="scss">
	.text-field-outline {
		margin: 8px;
		display: flex;
		align-items: center;
		height: calc(56px - 2px);
		width: 25ch;
		border: 1px solid rgba(0, 0, 0, 0.23);
		border-radius: 8px;
		padding: 0 16px;
		position: relative;
		user-select: none;

		&:hover {
			border: 1px solid rgba(0, 0, 0, 0.7);
		}
		&:has(input:focus) {
			border: 2px solid #1976d2;
			label {
				color: #1976d2;
				transform: translate(0, -28px) scale(0.75);
			}
		}
		&:not(:has(input:placeholder-shown)) {
			border: 2px solid #1976d2;
			label {
				color: #1976d2;
				transform: translate(0, -28px) scale(0.75);
			}
		}

		label {
			position: absolute;
			padding: 0 4px;
			color: rgba(0, 0, 0, 0.6);
			background: #fff;
			transition: 0.2s;
			cursor: text;
		}
	}
</style>
