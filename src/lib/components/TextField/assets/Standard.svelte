<script lang="ts">
	export let id: string | undefined;
	export let value: string | number | undefined;
	export let type: 'text' | 'number' | 'tel' | 'email' | 'url' | 'password' | 'search' | undefined;
	export let label: string;

	const onChange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		value = e.currentTarget.value;
	};
</script>

<div class="text-field-standard">
	<label for={id}>{label}</label>
	<div class="text-field-standard__input-container">
		<input {id} {type} {value} on:input={onChange} placeholder=" " />
	</div>
</div>

<style lang="scss">
	.text-field-standard {
		margin: 8px;
		display: flex;
		align-items: flex-end;
		height: 56px;
		width: 25ch;
		position: relative;
		user-select: none;

		label {
			position: absolute;
			color: rgba(0, 0, 0, 0.6);
			transition: 0.2s;
			left: 16px;
			bottom: calc(8px + 2px);

			&:has(+ .text-field-standard__input-container > input:focus) {
				color: #1976d2;
				transform: translate(0, -24px) scale(0.75);
			}
			&:not(:has(+ .text-field-standard__input-container > input:placeholder-shown)) {
				color: #1976d2;
				transform: translate(0, -24px) scale(0.75);
			}
		}
		.text-field-standard__input-container {
			display: inline-flex;
			align-items: flex-end;
			width: 100%;
			margin-top: 16px;
			position: relative;

			&::before {
				position: absolute;
				border-bottom: 1px solid rgba(0, 0, 0, 0.42);
				content: '';
				bottom: 0;
				left: 0;
				right: 0;
				transition: 0.2s;
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

			&:hover {
				&::before {
					border-bottom: 2px solid rgba(0, 0, 0, 0.7);
				}
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
			input {
				font-size: 1em;
				padding-top: 8px;
				padding-bottom: calc(8px + 2px);
			}
		}
	}
</style>
