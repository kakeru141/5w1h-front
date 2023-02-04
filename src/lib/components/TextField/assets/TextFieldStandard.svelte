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

<div class="text-field-standard">
	<label for={id}>{label}</label>
	<div class="text-field-standard__input-container">
		<Input {id} {type} {onChange} {value} />
	</div>
</div>

<style lang="scss">
	.text-field-standard {
		margin: 8px;
		display: flex;
		align-items: center;
		height: calc(56px - 8px * 2);
		width: 25ch;
		position: relative;
		user-select: none;
		padding: 8px 0;
		&:hover {
			.text-field-standard__input-container::before {
				border-bottom: 2px solid rgba(0, 0, 0, 0.7);
			}
		}

		label {
			position: absolute;
			color: rgba(0, 0, 0, 0.6);
			// background: #fff;
			transition: 0.2s;
			cursor: text;
			z-index: 1;
			left: 16px;
			user-select: none;

			&:has(+ .text-field-standard__input-container > input:focus) {
				color: #1976d2;
				transform: translate(0, -16px) scale(0.75);
			}
			&:not(:has(+ .text-field-standard__input-container > input:placeholder-shown)) {
				color: #1976d2;
				transform: translate(0, -16px) scale(0.75);
			}
		}
		.text-field-standard__input-container {
			display: inline-flex;
			align-items: flex-end;
			width: 100%;
			height: calc(100% - 8px * 2);
			padding: 8px 0;
			position: relative;

			&::before {
				position: absolute;
				border-bottom: 1px solid rgba(0, 0, 0, 0.42);
				content: '';
				bottom: 0;
				left: 0;
				right: 0;
				transition: 0.1s;
			}
			&::after {
				position: absolute;
				border-bottom: 2px solid #1976d2;
				content: '';
				bottom: 0;
				left: 0;
				right: 0;
				transition: 0.2s;
				transform: scaleX(0);
			}

			&:has(input:focus) {
				&::after {
					transform: scaleX(1);
				}
			}
			&:not(:has(input:placeholder-shown)) {
				&::after {
					transform: scaleX(1);
				}
			}
		}
	}
</style>
