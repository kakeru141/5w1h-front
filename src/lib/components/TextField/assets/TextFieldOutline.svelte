<script lang="ts">
	export let id: string | null | undefined;
	export let value: string | number | undefined | null;
	export let type:
		| 'text'
		| 'number'
		| 'tel'
		| 'email'
		| 'url'
		| 'password'
		| 'search'
		| null
		| undefined;
	export let label: string;
	
	const onChange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		value = e.currentTarget.value;
	};
</script>

<div class="text-field-outline">
	<label for={id}>{label}</label>
	<input {id} {type} {value} on:input={onChange} placeholder=" " />
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
		position: relative;
		user-select: none;

		&:hover {
			border: 1px solid rgba(0, 0, 0, 0.7);
		}
		&:has(input:focus) {
			border: 2px solid #1976d2;
			label {
				color: #1976d2;
				padding: 0 4px;
				transform: translate(0, -28px) scale(0.75);
			}
		}
		&:not(:has(input:placeholder-shown)) {
			border: 2px solid #1976d2;
			label {
				color: #1976d2;
				padding: 0 4px;
				transform: translate(0, -28px) scale(0.75);
			}
		}

		label {
			position: absolute;
			left: 16px;
			color: rgba(0, 0, 0, 0.6);
			background: #fff;
			transition: 0.2s;
		}
		input {
			padding: 18.5px 16px;
		}
	}
</style>
